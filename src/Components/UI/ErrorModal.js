import React from "react";
import Card from "./Card";
import Button from "../Users/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
//onclick for backgdrop and button will dismiss (null) the error from AddUser.js
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
