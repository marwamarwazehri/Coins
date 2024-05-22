import React from 'react'
import './Join.css'
import BitCoin from '../img/bitcoin-new.webp'
import ThemeCoinBlue from '../img/therem-new.png'
import { motion } from "framer-motion";
import Coins from '../img/group-coins.png'
import Bag from '../img/mony-box.webp'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Join = () => {
  return (
    <div className='join'id="join">
       <div className='join-text'>
         <motion.img 
          src={BitCoin} 
          className='coin'
          animate={{ y: [0, -20, 0], transition: { repeat: Infinity, duration: 2 } }}
        />
         <h1>JOIN US VIA <span>DISCORD</span></h1>
          <motion.img 
          src={ThemeCoinBlue} 
          className='coin'
          animate={{ y: [0, -20, 0], transition: { repeat: Infinity, duration: 2 } }}
        />

      </div>
      <p>Invest and manage all your crypto at one place.</p>
      <button className='join-btn'>Join via discord</button>

      <div className='join-contact'>
         <img src={Bag} className='bag'/>
         <div className='contact-links'>
              <FaTwitter className='con'/>
              <FaFacebook className='con'/>
              <FaYoutube className='con'/>
         </div>
         <img src={Coins} className='coins'/>
      </div>
      
    </div>
  )
}

export default Join
