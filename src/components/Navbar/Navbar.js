import './Navbar.css'
import logo from './aqua.png'
import React from 'react';

export default function Navbar() {
  return (
    <div>
            <nav className="navbar">
    
    <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
        </span>
   
        <a style={{marginTop:'-25vh', marginLeft:'-15vw' ,height:'5vh', width:'15vw'}}  href="#"className="logo">
      <img style={{height:"40vh"}}  src={logo} alt=""  />
    </a>
    <ul className="main-nav" id="js-menu">
      <li>
        <a href="/" className="nav-links">Home</a>
      </li>
      <li>
        <a href="/analysis" className="nav-links">Analysis</a>
      </li>
      <li>
        <a href="/table" className="nav-links">Table</a>
      </li>
      {/* <li>
        <a href="#" className="nav-links">Contact Us</a>
      </li> */}
    
    </ul>
   
  </nav>
    </div>
  )
}
