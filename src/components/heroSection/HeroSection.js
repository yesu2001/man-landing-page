import React from 'react'
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Navbar from '../navbar/Navbar';

function HeroSection() {
  return (
    <div className='Hero_section'>
        <Navbar/>
        <div className='hero_content'>
        <h1 className='hero_heading'>INTRODUCING PROJECT <p>ENERGY</p></h1>
        <span className='hero_subheading'>Say Goodbye to Slow and Inconvenient Charging Our Product Offers the Fastest and Most Reliable Charging Experience Yet.</span><br/>
        <Link to='/projects'><button className='hero_checkout'>Learn more</button></Link>
        </div>
    </div>
  )
}

export default HeroSection