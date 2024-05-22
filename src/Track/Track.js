import React from 'react'
import './Track.css'
import BitCoin from '../img/bitcoin-new.webp'
import ThemeCoinBlue from '../img/therem-new.png'
import { usePostContext } from '../context';
import { motion } from "framer-motion";





const Track = () => {
  const {Coins}=usePostContext();
  
  

  
  return (
    <div className='Track' id="track">
      <div className='track-text'>
         <motion.img 
          src={BitCoin} 
          className='coin'
          animate={{ y: [0, -20, 0], transition: { repeat: Infinity, duration: 2 } }}
        />
         <h1>TRACK AN TRADE <span>CRYPTO CURRENCIES</span></h1>
          <motion.img 
          src={ThemeCoinBlue} 
          className='coin'
          animate={{ y: [0, -20, 0], transition: { repeat: Infinity, duration: 2 } }}
        />

      </div>

      <div className='track-icons'>
        {Coins.length > 0 &&
  Coins[0].slice(0, 4).map((coin, index) => {
    const changePercentage = coin.price_change_percentage_24h;
    const changeColor = changePercentage < 0 ? 'red' : '#90EE90';
    return (
      <div className='icon' key={index}>
        <img src={coin.image} alt={`Coin ${index}`} />
        <div className='icon-details'>
          <p>{coin.symbol.toUpperCase()}<span style={{ color: changeColor }}>{changePercentage.toFixed(2)}%</span></p>
          <p className='price'>${coin.current_price.toLocaleString()}</p>
        </div>
      </div>
    );
  })
}

      </div>
      
    </div>
  )
}

export default Track
