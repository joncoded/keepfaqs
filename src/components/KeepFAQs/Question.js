import React, { useState } from "react"
import config from "./config"

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  function handleButtonClick() {
    setShowAnswer(!showAnswer)
  }

  return (
    <article className="question">
      <button className="button" onClick={handleButtonClick}>
        <h2 className="heading">{question}</h2>
        <div className="symbol">
          <span aria-hidden="true">{showAnswer ? "-" : "+"}</span>
          <span className="sr-only">{showAnswer ? config.collapse : config.expand}</span>
        </div>
      </button>
      <div className="answer">{showAnswer && <p className="answer" dangerouslySetInnerHTML={{ __html: answer }} />}</div>
    </article>
  )
}

export default Question
