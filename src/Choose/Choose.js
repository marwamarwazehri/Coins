import React from 'react'
import './Choose.css'
import hand from '../img/new-hand.webp'
import { FaWallet } from "react-icons/fa"; //wallet
import { IoFlash } from "react-icons/io5";//flash
import { BsRocketTakeoffFill } from "react-icons/bs";//rocket

const Choose = () => {
  return (
    <div className='choose' id="chooseus">
       <h1><span>WHY</span> CHOOSE US</h1>
       <div className='choose-details'>
              <div className='choose-content'>
                    
                    
               <div className='content-item'>
                            <div className='ch-icon'>
                           <FaWallet className='choose-icon'/>
                           </div>
                           <div className='content-item-text'>
                               <h4>CONNECT YOUR WALLET</h4>
                               <p>Use Trust Wallet Metamask or to connect to the app</p>
                           </div>
                     </div>
               <div className='content-item'>
                          <div className='ch-icon'>
                           <BsRocketTakeoffFill className='choose-icon'/>
                           </div>
                           <div className='content-item-text'>
                               <h4>SELECT YOUR QAUNTITY</h4>
                               <p>Upload Your crypto and set a title, description
                                   and price.
                               </p>
                           </div>
                     </div>

               <div className='content-item'>
                          
                            <div className='ch-icon'>
                           <IoFlash className='choose-icon'/>
                           </div>
                          
                           <div className='content-item-text'>
                               <h4>CONFIRM TRANSACTION</h4>
                               <p>Earn by selling your crypto on our marketplace.</p>
                           </div>
                     </div>
              </div>

               <div className='choose-img'>
                     <img src={hand}/>
               </div>
         <div className='choose-content'>
                    
                    
               <div className='content-item'>
                            <div className='ch-icon'>
                           <FaWallet className='choose-icon'/>
                           </div>
                           <div className='content-item-text'>
                               <h4>RECEIVE YOUR OWN NETS</h4>
                               <p>Invest all your crypto at one place on one platform</p>
                           </div>
                     </div>
               <div className='content-item'>
                          <div className='ch-icon'>
                           <BsRocketTakeoffFill className='choose-icon'/>
                           </div>
                           <div className='content-item-text'>
                               <h4>STAKE A MARKET TO SELL</h4>
                               <p>Discover collect the right crypto collections to buy or sell 
                               </p>
                           </div>
                     </div>

               <div className='content-item'>
                          
                            <div className='ch-icon'>
                           <IoFlash className='choose-icon'/>
                           </div>
                          
                           <div className='content-item-text'>
                               <h4>DRIVE YOUR COLLECTION</h4>
                               <p>We make it easy to Discover.Invest and manage</p>
                           </div>
                     </div>
              </div>
       </div>
      
    </div>
  )
}

export default Choose
