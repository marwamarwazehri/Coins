import React from 'react';
import './CoinsTable.css';

export const CoinItem = ({ coin }) => {
  const changePercentage = coin.price_change_percentage_24h;
  const changeColor = changePercentage < 0 ? 'red' :'#90EE90';

  return (
    <div className='coin-row'>
      <div className='img-symbol'>
        <img src={coin.image} alt='' />
        <p className='symbol'>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>${coin.current_price.toLocaleString()}</p>
      <p style={{ color: changeColor }}>
        {changePercentage.toFixed(2)}%
      </p>
      <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${coin.market_cap.toLocaleString()}</p>
    </div>
  );
};
