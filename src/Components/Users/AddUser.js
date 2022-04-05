import React, { useState } from "react";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Button from "./Button";

//Adds new user with username/age inputs and submit button
const AddUser = (props) => {
  //add username/age state for input
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  //error state for ErrorModal
  const [error, setError] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    //will not submit if empty values
    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
      setError({
        title: "Oopsie...",
        message: "Looks like you're missing some information!",
      });
      return;
    }
    //+forces it to be a number for +enteredAge logic to be > 1
    if (+enteredAge < 1) {
      setError({
        title: "Is it possible to be so young?",
        message: "We need an age that's older than 0!",
      });
      return;
    }
    //FROM APP.JS -> liftings state up
    props.onAddUser(enteredUserName, enteredAge);
    //will 2-way bind and clear the form when entered
    setEnteredAge("");
    setEnteredUserName("");
  };

const errorHandler = () => {
    setError(null);
};

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      {/*logic is if error? output error modal */}
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
    </div>
  );
};

export default AddUser;
