import React , {useState}from 'react'
import './Navbar.css'
import { SiTwitter } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [sideBar, setSideBar] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setSideBar(false);
  }

   const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className='navbar'>
       <h3>COINDOM</h3>

       <div className='links'>
       <a href="#track" className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>Home</a>
       <a href="#market" className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>Market</a>
       <a href="#chooseus" className={activeLink === 2 ? 'active' : ''} onClick={() => handleLinkClick(2)}>ChooseUs</a>
       <a href="#join" className={activeLink === 3 ? 'active' : ''} onClick={() => handleLinkClick(3)}>Join</a>
       </div>


    <div>
       <a href="#"><SiTwitter className='nav-tweet'/></a>
    </div>

     <div className={sideBar ? 'circle hide' : 'circle'} onClick={toggleSideBar}>
       <div className='nav-icon'>
        <RxHamburgerMenu className='lines'/>
       </div>
       </div>

<div className={`side-links ${sideBar ? 'side-bar ' : 'side-bar hidden'}`}>
       <a href="#track" className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>Home</a>
       <a href="#market" className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>Market</a>
       <a href="#chooseus" className={activeLink === 2 ? 'active' : ''} onClick={() => handleLinkClick(2)}>ChooseUs</a>
       <a href="#join" className={activeLink === 3 ? 'active' : ''} onClick={() => handleLinkClick(3)}>Join</a>
       <IoCloseSharp className='cancel' onClick={()=>setSideBar(false)}/>
       </div>
      
    </div>
  )
}

export default Navbar
