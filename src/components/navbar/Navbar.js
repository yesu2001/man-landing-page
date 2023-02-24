import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import FooterSection from '../footerSection/FooterSection';
import {ImMenu} from 'react-icons/im';
import {ImCross} from 'react-icons/im';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [showModal, setShowModal] = React.useState(false);
  const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "black",
  padding: "20px",
  };
  
  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  let activeStyle = {
        color: "white"
  };

  return (
    <div className='Navbar'>
        <div className='navbar_desktop'>
            <b className="navbar_logo">MAN</b>
            <nav>
              <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Home</NavLink>
              <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">About Us</NavLink>
              <NavLink to="/projects" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Projects</NavLink>
              <NavLink to="/investors" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Investors</NavLink>
              <NavLink to="/media" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Media</NavLink>
              <NavLink to="/careers" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Careers</NavLink>
            </nav>
            <Link to="/contact"><button className='navbar_contact'>Contact</button></Link>
        </div>
        <div className="navbar_phone">
          <b className="navbar_logo">MAN</b>NavLink
          <ImMenu onClick={handleOpen}/>
           { showModal && <div className="modal" style={modalStyles}>
            <div className="navbar_phone_header">
              <h1>MAN</h1>
              <ImCross onClick={handleClose}/>
            </div>
            <nav>
              <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Home</NavLink>
              <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">About Us</NavLink>
              <NavLink to="/projects"  style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Projects</NavLink>
              <NavLink to="/investors" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Investors</NavLink>
              <NavLink to="/media"  style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Media</NavLink>
              <NavLink to="/careers" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Careers</NavLink>
            </nav>
            <Link to="/contact"><button className='navbar_contact'>Contact</button></Link>
          </div>}
        </div>
    </div>
  )
}

export default Navbar;