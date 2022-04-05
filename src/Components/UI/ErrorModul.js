import React from "react";
import Button from "../Users/Button";
import Card from "./Card";
import Button from "../Users/Button";

const ErrorModul = (props) => {
  <Card>
    <header>
      <h2>{props.title}</h2>
    </header>
    <div>
      <p>{props.message}</p>
    </div>
    <footer>
      <Button>Okay</Button>
    </footer>
  </Card>;
};

export default ErrorModul;
