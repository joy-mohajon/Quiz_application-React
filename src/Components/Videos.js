import React from "react";
import { Link } from "react-router-dom";
import classes from "../Styles/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  return (
    <div className={classes.videos}>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
    </div>
  );
};

export default Videos;
