import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "./Button";

//Adds new user with username/age inputs and submit button
const AddUser = props => {
  //add username state for input
  const [enteredUserName, setEnteredUserName] = useState("");
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  //add age state for input
  const [enteredAge, setEnteredAge] = useState("");
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    //will not submit if empty values
    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
      return;
    }
    //+forces it to be a number for +enteredAge logic to be > 1
    if (+enteredAge < 1) {
      return;
    }
    //FROM APP.JS -> liftings state up
    props.onAddUser(enteredUserName, enteredAge);
    //will 2-way bind and clear the form when entered
    setEnteredAge("");
    setEnteredUserName("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
