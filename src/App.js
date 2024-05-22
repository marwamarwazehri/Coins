import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import React, { useState, useEffect } from 'react'
import Coin from './Coin/Coin';
import axios from 'axios'
import { usePostContext } from './context';


function App() {
  const {coins, setCoins}=usePostContext();
  

return (
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:id' element={<Coin />} />

        
      </Routes>
    
  );
}

export default App;
