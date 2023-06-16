import React, { Component } from "react";
import classes from "./User.module.css";

// class-based
// Component class adds important functionality to make your class work as a component
class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount"); // will be logged 3 times because there's 3 users
  }

  render() {
    // by extending Component class, can now use this.props
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
