import React from 'react'
import { Link } from 'react-router-dom';
import './AboutSection.css';
import Navbar from '../../components/navbar/Navbar';

function AboutSection() {
  return (
    <div className='About'>
      <div className='about_content'>
        <h2 className='about_heading'>About us</h2>
        <p className='about_para'>
        MAN create & innovative products with unique structure and resilience. We are passionate about our products & service and how they empower our customer's lives. Founded in end of 2021, we grew quickly thanks to our committed contributors and shareholders.
        </p>
        <Link to='/about'><button className='about_learnmore'>learn more</button></Link>
      </div>
      <img src='https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXYlMjBjaGFyZ2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60' alt='ev car charging'/>
    </div>
  )
}

export default AboutSection;