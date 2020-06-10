import React from "react";

import classes from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <div className={classes.Logo}>
      <a href="/">
        <h1>PartyPros</h1>
      </a>
    </div>
    <header className={classes.Navigation}>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  </div>
);

export default toolbar;
