import React from 'react'
import CoinsTable from '../CoinsTable/CoinsTable'
import Navbar from '../Navbar/Navbar'
import Track from '../Track/Track'
import Choose from '../Choose/Choose'
import Join from '../Join/Join'



const Home = ( {coins}) => {
  return (
    <div className='home'>
       <Navbar/>
       <Track/>
       <CoinsTable coins={coins}/>
       <Choose/>
       <Join/>
    </div>
  )
}

export default Home
