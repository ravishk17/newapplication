import React, { Component } from "react";
import axios from "axios";
import classes from "./Contact.module.css";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Contact extends Component {
  state = {
    fullname: "",
    phone: "",
    email: "",
    location: "",
    other: "",
    errors: {
      fullname: "",
      phone: "",
      email: "",
      location: "",
    },
  };

  validateForm = () => {
    const fullname = this.state.fullname;
    const phone = this.state.phone;
    const email = this.state.email;
    const location = this.state.location;
    let errors = this.state.errors;
    errors.fullname = fullname.length < 1 ? "Name can't be empty" : "";
    errors.phone =
      isNaN(phone) || phone.length < 1 ? "Enter a valid phone number" : "";
    errors.email = validEmailRegex.test(email) ? "" : "Invalid email";
    errors.location = location.length < 1 ? "Location can't be empty" : "";
    this.setState({ errors });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "fullname":
        errors.fullname = value.length < 1 ? "Name can't be empty" : "";
        break;
      case "phone":
        errors.phone =
          isNaN(value) || value.length < 1 ? "Enter a valid phone number" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Invalid email";
        break;
      case "location":
        errors.location = value.length < 1 ? "Location can't be empty" : "";
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.validateForm();
    const nameError = this.state.errors.fullname;
    const phoneError = this.state.errors.phone;
    const emailError = this.state.errors.email;
    const locationError = this.state.errors.location;
    const touched = this.state.touched;
    console.log("1");
    console.log(nameError);
    console.log("2");
    console.log(phoneError);
    console.log("3");
    console.log(emailError);
    console.log("4");
    console.log(locationError);
    if (
      nameError.length > 0 ||
      phoneError.length > 0 ||
      emailError.length > 0 ||
      locationError.length > 0 ||
      touched == false
    ) {
      this.setState({ baseError: true });
      console.log(this.state);
      return;
    }
    await axios.post("/api/feed/book", {
      name: this.state.fullname,
      phone: this.state.phone,
      email: this.state.email,
      location: this.state.location,
      other: this.state.other,
    });
    this.setState({
      fullname: "",
      phone: "",
      email: "",
      location: "",
      other: "",
      errors: {
        fullname: "",
        phone: "",
        email: "",
        location: "",
      },
    });
  };
  render() {
    return (
      <div className={classes.form}>
        <h1>Contact PartyPros</h1>
        <div className={classes.card}>
          <form onSubmit={this.handleSubmit}>
            <input
              name="fullname"
              type="text"
              placeholder="full name"
              value={this.state.fullname}
              onChange={this.handleChange}
              // onChange={(event) => this.setState({ fullname: event.target.value })}
            />
            <span className="inlineError">{this.state.errors.fullname}</span>
            <input
              name="phone"
              type="number"
              placeholder="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              // onChange={(event) => this.setState({ phone: event.target.value })}
            />
            <span className="inlineError">{this.state.errors.phone}</span>
            <input
              name="email"
              type="email"
              placeholder="email"
              value={this.state.email}
              // onChange={this.handleChange}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
            <span className="inlineError">{this.state.errors.email}</span>
            <input
              name="location"
              type="text"
              placeholder="location"
              value={this.state.location}
              onChange={this.handleChange}
              // onChange={(event) => this.setState({ location: event.target.value })}
            />
            <span className="inlineError">{this.state.errors.location}</span>
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
