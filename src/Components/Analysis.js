import React from "react";
import Questions from "./Questions";

const Analysis = ({ answers }) => {
  return (
    <div>
      <h1>Question Analysis</h1>
      <Questions answers={answers} />
    </div>
  );
};

export default Analysis;
