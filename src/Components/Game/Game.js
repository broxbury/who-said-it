import React, { useState, useEffect } from 'react';
import './Game.css';
import { trumpQuote, kanyeQuote } from '../../apiCalls';



export const Game = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const generateQuote = async () => {
      let currentQuote;
      let number = Math.floor(Math.random() * 2) + 1

      if(number === 1) {
        currentQuote = await trumpQuote()
        console.log(currentQuote)
      }
      if(number === 2) {
      currentQuote = await kanyeQuote()
        console.log(currentQuote)
      }
      quote && setQuote(currentQuote)
    };
    generateQuote();
  }, [])

  return(
    <div className='game-container'>
      <div className='images-container'>
        <img className='trump' src='/images/trump.png'/>
        <img className='kanye' src='/images/kanye.png'/>
      </div>
      <div className='quote-container'>
        <h2 className='quote'>Quote goes here!</h2>
      </div>
    </div>
  )
}