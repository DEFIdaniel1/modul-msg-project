import React from "react";
import classes from "./Button.module.css";
//template button to use with props imported
//classes, button type to be passed through (default 'button' if none)

const Button = props => {
  return (
    <button className={classes.button} type={props.type || 'button'}>
      {props.children}
    </button>
  );
};

export default Button;