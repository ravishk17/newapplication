import React, { Component } from "react";
import Aux from "../../hoc/Auxy/Auxy";
import classes from "./Main.module.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Gallery from "./Gallery/Gallery";
import Book from "./Requests/Requests";
import { Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Main}>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/requests" exact component={Book} />
        </div>
      </Aux>
    );
  }
}

export default Main;
