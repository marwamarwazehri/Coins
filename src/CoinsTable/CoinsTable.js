import React, {useState,useEffect} from 'react'
import { CoinItem } from './CoinItem'
import { Link } from 'react-router-dom'
import Coin from '../Coin/Coin'
import './CoinsTable.css'
import { usePostContext } from '../context';


const CoinsTable = () => {
const {Coins,setCoinss, data, setData, page,setPage}=usePostContext();

      
      

  const handlePage = (index) => {
    setPage(index)
  }





  return (
    <div className='container' id="market">
       <h4>Market Update</h4>
      <div className='heading'>
        <p className='coin-name'>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Mkt Cap</p>
      </div>

      {data.map(coin => (
          <Link to={`/coin/${coin.id}`} element={<Coin/>} key={coin.id}>
        <CoinItem coin={coin} />
        </Link>
      ))}
  

<div className='buttons'>
  {Coins.map((item, index) => {
              return (
                <a href="#market">
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
                </a>
              )
            })}

            </div>

    </div>
  );
};

export default CoinsTable
