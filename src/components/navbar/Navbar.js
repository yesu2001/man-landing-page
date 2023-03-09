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
        color: "rgba(0,0,0,0.5)",
        fontWeight: "bold",
  };

  return (
    <div className='Navbar'>
        <div className='navbar_desktop'>
            <nav>
              <NavLink to={'/'}><span>MA</span>N</NavLink>
              <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">About Us</NavLink>
              <NavLink to="/projects/ourprojects" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Projects</NavLink>
            </nav>
            <nav>
              <NavLink to="/investors" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Investors</NavLink>
              <NavLink to="/media" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Media</NavLink>
              <NavLink to="/careers" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Careers</NavLink>
              <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Contact</NavLink>
            </nav>
        </div>
        <div className="navbar_phone">
          <Link to={'/'} className="main-header-wrap"><h1><span>MA</span>N</h1></Link>
          <ImMenu onClick={handleOpen}/>
           { showModal && <div className="modal" style={modalStyles}>
            <div className="navbar_phone_header">
              <h1>MAN</h1>
              <ImCross onClick={handleClose}/>
            </div>
            <nav>
              <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">About Us</NavLink>
              <NavLink to="/projects"  style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Projects</NavLink>
              <NavLink to="/investors" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Investors</NavLink>
              <NavLink to="/media"  style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Media</NavLink>
              <NavLink to="/careers" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Careers</NavLink>
              <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined} className="navList">Contact</NavLink>
            </nav>
          </div>}
        </div>
    </div>
  )
}

export default Navbar;