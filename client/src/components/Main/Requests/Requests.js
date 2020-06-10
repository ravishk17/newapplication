import React, { Component } from "react";
import axios from "axios";
// import classes from "./Requests.module.css";

class Book extends Component {
  state = {
    booking: [],
  };

  componentDidMount() {
    axios.get("/api/feed/all").then((res) => {
      this.setState({ booking: res.data });
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        {this.state.booking.map((person, index) => (
          <p>
            {person.name} {person.email}
          </p>
        ))}
      </div>
    );
  }
}

export default Book;
