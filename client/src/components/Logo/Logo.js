import React from "react";

import cakeLogo from "../../assets/images/logo1.jpg";

import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <a href={props.link}>
      <img src={cakeLogo} alt="Party" />
    </a>
  </div>
);

export default logo;
