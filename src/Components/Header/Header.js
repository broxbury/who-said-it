import React, { useState, useEffect } from 'react';
import './Header.css';

export const Header = () => {
  return(
    <div className='header-container'>
      <h2>SCORE:</h2>
      <h1 className='title'>who said it?</h1>
      <h2>FAVORITES</h2>
    </div>
  )
}