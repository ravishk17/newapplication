import React, { Component } from "react";
import axios from "axios";
import classes from "./Requests.module.css";
import DeleteRounded from "@material-ui/icons/DeleteRounded";

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

  handleDelete = async (postid) => {
    const res = await axios.delete(`/api/feed/delete/${postid}`);
    if (res.status !== 200) {
      throw new Error("Deleting post failed");
    }
    return res.json();
  };

  render() {
    return (
      <div>
        {this.state.booking.map((person, index) => (
          <div className={classes.requestcard}>
            <ul>
              <li>{person.name}</li>
              <li>{person.email}</li>
              <li>{person.location}</li>
              <li>{person.phone}</li>
              <li>{person.other}</li>
            </ul>
            <div className={classes.deletebutton}>
              <form onSubmit={this.handleDelete.bind(this, person.id)}>
                <button>
                  <DeleteRounded />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Book;
