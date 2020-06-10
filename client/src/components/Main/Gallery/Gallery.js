import React, { Component } from "react";
import Aux from "../../../hoc/Auxy/Auxy";
import classes from "./Gallery.module.css";
import { Route } from "react-router-dom";
import Events from "./Events/Events";

class Gallery extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Gallery}>
          <h1>Gallery</h1>
        </div>
        <Route path="/gallery" exact component={Events} />
      </Aux>
    );
  }
}

export default Gallery;
