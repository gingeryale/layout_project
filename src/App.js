import React, { useState, useCallback } from "react"
import HomePage from './components/HomePage';
import Submissions from './components/Submission';
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Submissions />
    </div>
  )
}

export default App;