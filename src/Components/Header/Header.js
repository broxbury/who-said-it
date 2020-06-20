import React, { useState, useEffect } from 'react';
import './Header.css';

export const Header = ( { score, attempts }) => {
  return(
    <div className='header-container'>
      <h2>SCORE: {score+'/'+attempts}</h2>
      <h1 className='title'>who said it?</h1>
      <h2>FAVORITES</h2>
    </div>
  )
}