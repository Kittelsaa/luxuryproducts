import React from 'react';
import '../styles/Common.css';
import logo from '../images/logo.png';
import list from '../images/list.png';



export default function Header() {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt='lg'></img> 
      <ul className='navlinks'>
        <li className='navlink'>Home</li>
        <li className='navlink'>About Us</li>
        <li className='navlink' >Services</li>
        <li className='navlink' >Blogs</li>
      </ul>
      <button className='gitbutton' >Contact</button>
      <img className='bplus' src={list} alt='lg'></img> 
    </nav>
  )
}


