const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});
pgClient.on("error", () => console.log("Lost PG connection"));

pgClient
  .query(
    "CREATE TABLE IF NOT EXISTS booking (id SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(255), phone TEXT, location VARCHAR(255), other VARCHAR(255))"
  )
  .catch((err) => console.log(err));

// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/feed/all", async (req, res) => {
  const values = await pgClient.query("SELECT * from booking");
  res.send(values.rows);
});

app.delete("/feed/delete/:id", async (req, res, next) => {
  try {
    const result = await pgClient.query("DELETE from booking WHERE id=$1", [
      req.params.id,
    ]);

    return res.status(200).json({ message: "Deleted" });
  } catch (err) {
    return next(err);
  }
});

app.post("/feed/book", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const location = req.body.location;
  const other = req.body.other;

  pgClient.query(
    "INSERT INTO booking(name, email, phone, location, other) VALUES($1, $2, $3, $4, $5)",
    [name, email, phone, location, other]
  );

  res.send({ working: true });
});

app.listen(5000, (err) => {
  console.log("Listening");
});
