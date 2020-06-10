import React from "react";

import classes from "./Layout.module.css";
import Aux from "../../hoc/Auxy/Auxy";

import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  // <div classname={classes.Bg}>
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
  // </div>
);

export default layout;
