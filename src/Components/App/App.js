import React, { useState, useEffect } from 'react';
import { Game } from "../Game/Game.js";
import './App.css'
import { Header } from "../Header/Header.js";

const App = () => {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0)

  const updateScores = (isCorrect) => {
    setAttempts(attempts + 1)

    if(isCorrect) {
      setScore(score + 1)
    }
  }

  return(
    <div className="main-container">
      <Header score={score} attempts={attempts}/>
      <Game updateScores={updateScores} />
    </div>
  )
}
export default App;
