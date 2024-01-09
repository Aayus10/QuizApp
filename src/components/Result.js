import React from "react";
import { Questions } from "../question";
import "./Result.css"; // Import the CSS file

export default function Result(props) {
  let comment = "";
  const result = (score) => {
    if (score === 0) {
      comment =
        "Oops! It looks like you missed all the goals. Keep learning and try again!";
    } else if (score <= 4) {
      comment = "Nice attempt! You're on the right track. Keep going!";
    } else if (score <= 7) {
      comment = "Great job! You're scoring some good points. Keep it up!";
    } else if (score <= 9) {
      comment = "Wow! Impressive score! You know your football facts!";
    } else {
      comment = "Congratulations! You're a football trivia expert!";
    }
    return comment;
  };

  return (
    <div className="result-container">
      <div className="score-info">
        YOUR SCORE: {props.score} / {Questions.length}
      </div>
      <div className="result-text">RESULT: {result(props.score)}</div>
      <button className="try-again-btn" onClick={props.reset}>
        Try Again
      </button>
    </div>
  );
}
