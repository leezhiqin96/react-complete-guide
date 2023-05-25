import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // classes.card refers to Card.module.css class while
    // props.className refers to parent component class
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
