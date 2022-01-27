import React from "react";
import image from "../assets/images/signup.svg";
import classes from "../Styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
};

export default Illustration;
