import React from 'react';
import '../styles/Common.css';
import Header from './Header';
import Body from './Body';
import ch2 from '../images/ch2.png';




export default function Homep() {
  return (
    <div className='home'>
      <div className='homep'>
        <Header />
        <div className='welc'>
          <div className='welcomehp'>
            <h6 className='headeh'>TRENDY COLLECTIONS</h6>
            <p className='phome'>
              Make your <code>interior</code> <br/>
              unique & modern 
            </p>
            <p className='phome1'>
              Turn your room with luxury into a lot more <br/>
              minimalist and modern
            </p>
            <button className='gitbutton1' >Discover More</button>
          </div>
          <img className='ch2' src={ch2} alt='lg'></img> 
        </div>

        <Body />
      </div>
    </div>
  )
}
