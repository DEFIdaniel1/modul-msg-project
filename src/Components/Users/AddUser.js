import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Button from "./Button";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    
    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
      setError({
        title: "Oopsie...",
        message: "Looks like you're missing some information!",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Is it possible to be so young?",
        message: "We need an age that's older than 0!",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    //uses ref DOM to reset input values upon submition
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
