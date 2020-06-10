import React, { Component } from "react";
import axios from "axios";
import classes from "./Contact.module.css";

class Contact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    location: "",
    date: "",
    other: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/feed/book", {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      location: this.state.location,
      date: this.state.date,
      other: this.state.other,
    });
    this.setState({
      name: "",
      phone: "",
      email: "",
      location: "",
      date: "",
      other: "",
    });
  };
  render() {
    return (
      <div className={classes.form}>
        <h1>Contact PartyPros</h1>
        <div className={classes.card}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="name"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <input
              placeholder="phone"
              value={this.state.phone}
              onChange={(event) => this.setState({ phone: event.target.value })}
            />
            <input
              placeholder="email"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
            <input
              placeholder="location"
              value={this.state.location}
              onChange={(event) =>
                this.setState({ location: event.target.value })
              }
            />
            <input
              placeholder="other"
              value={this.state.other}
              onChange={(event) => this.setState({ other: event.target.value })}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
