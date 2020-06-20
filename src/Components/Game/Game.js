import React, { useState, useEffect } from 'react';
import './Game.css';
import { trumpQuote, kanyeQuote } from '../../apiCalls';



export const Game = ({ updateScores }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [disable, setDisable] = useState(false)

  const generateQuote = async () => {
    let currentQuote;
    let number = Math.floor(Math.random() * 2) + 1
    setAuthor(number)

    if(number === 2) {
      let data = await trumpQuote()
      currentQuote = data.message
      setQuote(currentQuote)
      setAuthor('trump')
    }
    if(number === 1) {
      let data = await kanyeQuote()
      currentQuote = data.quote
      setQuote(currentQuote)
      setAuthor('kanye')
    }
    setDisable(false)
  };

  const checkAnswer = (person) => {
    if(!disable) {
      setDisable(true)
      if(author === person) { 
        setQuote('CORRECT!')
        updateScores(true)
        setTimeout(() => {
          generateQuote();
        }, 2000)
      } else {
        setQuote('WRONG!')
        updateScores(false)
        setTimeout(() => {
          generateQuote();
        }, 2000)
      }
    } else {
      return
    }
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return(
    <div className='game-container'>
      <div className='images-container'>
        <img className='trump' onClick={() => checkAnswer('trump')} src='/images/trump.png'/>
        <img className='kanye' onClick={() => checkAnswer('kanye')} src='/images/kanye.png'/>
      </div>
      <div className='quote-container'>
      {quote && <p className='quote'>"{quote}"</p> }
      </div>
    </div>
  )
}