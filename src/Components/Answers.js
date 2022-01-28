import React from "react";
import classes from "../Styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox
        className={classes.answer}
        type="checkbox"
        text="First option"
      />
      <Checkbox
        className={classes.answer}
        type="checkbox"
        text="Second option"
      />
    </div>
  );
};

export default Answers;
