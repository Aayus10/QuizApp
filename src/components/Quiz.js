import React, { useState } from "react";
import { Questions } from "../question";
import Result from "./Result";
import "./Quiz.css";

export default function Quiz() {
  const [currQuestion, setcurrQuestion] = useState(0);
  const [selectedOpt, setselectedOpt] = useState(0);
  const [score, setscore] = useState(0);
  const [showResult, setshowResult] = useState(false);

  const nextquestion = () => {
    updatescore();
    if (currQuestion < Questions.length - 1) {
      setcurrQuestion(currQuestion + 1);
      setselectedOpt(0);
    } else {
      setshowResult(true);
    }
  };

  const updatescore = () => {
    if (selectedOpt === Questions[currQuestion].answer) {
      setscore(score + 1);
    }
  };

  const reset = () => {
    setshowResult(false);
    setscore(0);
    setcurrQuestion(0);
    setselectedOpt(0);
  };
  return (
    <>
      {showResult ? (
        <Result score={score} reset={reset}></Result>
      ) : (
        <>
          <p className="title">TEST YOUR FOOTBALL KNOWLEDGE WITH THIS QUIZ</p>
          <div className="que-container">
            <div className="question" key={currQuestion}>
              Q.No.{currQuestion + 1}. {Questions[currQuestion].question}
            </div>
            <div className="options">
              {Questions[currQuestion].options.map((opt, i) => {
                return (
                  <button
                    id="i"
                    type="submit"
                    onClick={() => {
                      setselectedOpt(i + 1);
                    }}
                    className={`option-btn ${
                      selectedOpt === i + 1 ? "checked" : null
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <button className="next-btn" onClick={nextquestion}>
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
