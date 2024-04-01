import React from 'react';
import '../styles/Common.css';
import logo1 from '../images/logo1.png';
import menuu from '../images/menuu.png';



export default function Footer() {
  return (
    <footer className='footer'>
      <div className='fdiv'>
        <div className='logotxt'> 
        <img className='logof' src={logo1} alt='lg'></img> 
        <p >
          Turn your room with luxury into a lot more <br/>
          minimalist and modern
        </p>
        </div>
        <ul className='navlinksf'>
          <li className='navlinkf'>Home</li>
          <li className='navlinkf'>About Us</li>
          <li className='navlinkf' >Services</li>
          <li className='navlinkf' >Blogs</li>
        </ul>
        <img className='bplus1' src={menuu} alt='lg'></img> 

      </div>
      <h6 className='copy'>@2024 Luxury. All rights reserved </h6> 
    </footer>
  )
}
