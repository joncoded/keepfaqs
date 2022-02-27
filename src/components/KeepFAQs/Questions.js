import React, { useState } from "react"
import data from "./data"
import Question from "./Question"

const Questions = () => {
  const [questions] = useState(data)
  return (
    <section className="questions">
      {questions.map(question => (
        <Question key={question.id} {...question}></Question>
      ))}
    </section>
  )
}

export default Questions
