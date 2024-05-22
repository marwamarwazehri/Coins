import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios'
const PostContext = createContext();


export const PostProvider = ({ children }) => {
       const [coins, setCoins] = useState([]);
       const [Coins, setCoinss] = useState([])
       const [data, setData] = useState([])
       const [page, setPage] = useState(0)

   const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

   
       
      

    
const paginate = (coins) => {
      const itemsPerPage = 10;
      const numberOfPages = Math.ceil(coins.length / itemsPerPage);

      const newCoins = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return coins.slice(start, start + itemsPerPage);
      });

      return newCoins;
    };

   
  
 useEffect(()=>{
    if (coins.length > 0) {
      const paginatedData = paginate(coins);
      setCoinss(paginatedData);
      setData(paginatedData[page]);
      console.log(paginatedData); 
    }
  },[coins,page])
  

  return (
    <PostContext.Provider value={{coins, setCoins, Coins,setCoinss, data, setData,
       page,setPage
     }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
