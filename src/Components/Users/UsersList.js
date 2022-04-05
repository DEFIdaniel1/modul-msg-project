import React from "react";
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = props => {
//for user object array (with name, age), will output JSX <li> mapped to the original list
//need UNIQUE KEY for each child element, so added into each <li> output
    return (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} is {user.age} years old.
            </li>
          ))}
        </ul>
      </Card>
    );
};

export default UsersList;