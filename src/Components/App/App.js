import React, { useState, useEffect } from 'react';
import { Game } from "../Game/Game.js";
import './App.css'
import { Header } from "../Header/Header.js";

const App = () => {
  return(
    <div className="main-container">
      <Header />
      <Game />
    </div>
  )
}
export default App;
