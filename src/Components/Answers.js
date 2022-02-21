import React from "react";
import classes from "../Styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <div key={index}>
          {input ? (
            <Checkbox
              className={classes.answer}
              type="checkbox"
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              type="checkbox"
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Answers;
