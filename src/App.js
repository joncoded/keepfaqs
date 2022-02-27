import React from "react"

import KeepFAQsHeader from "./components/KeepFAQs/Header"
import KeepFAQsQuestions from "./components/KeepFAQs/Questions"

function App() {
  return (
    <main>
      <div className="container">
        <KeepFAQsHeader />
        <KeepFAQsQuestions />
      </div>
    </main>
  )
}

export default App
