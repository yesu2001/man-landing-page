import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import FooterSection from '../footerSection/FooterSection';
import {ImMenu} from 'react-icons/im';
import {ImCross} from 'react-icons/im';

function Navbar() {
  const [activeTab,setActiveTab] = useState('home');
  const [open,setOpen] = useState(true);
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
  return (
    <div className='Navbar'>
        <div className='navbar_desktop'>
            <b className="navbar_logo">MAN</b>
            <nav>
              <Link to="/" className={activeTab === "home" ? 'active ':  'navList' } onClick={() => setActiveTab('home')}>Home</Link>
              <Link to="/about" className={activeTab === "about" ? 'active ':  'navList' } onClick={() => setActiveTab('about')}>About Us</Link>
              <Link to="/projects" className={activeTab === "projects" ? 'active ':  'navList' } onClick={() => setActiveTab('product')}>Projects</Link>
              <Link to="/investors" className={activeTab === "investors" ? 'active ':  'navList' } onClick={() => setActiveTab('investors')}>Investors</Link>
              <Link to="/media" className={activeTab === "media" ? 'active ':  'navList' } onClick={() => setActiveTab('media')}>Media</Link>
              <Link to="/careers" className={activeTab === "careers" ? 'active ':  'navList' } onClick={() => setActiveTab('careers')}>Careers</Link>
            </nav>
            <Link to="/contact"><button className='navbar_contact'>Contact</button></Link>
        </div>
        <div className="navbar_phone">
          <b className="navbar_logo">MAN</b>
          <ImMenu onClick={handleOpen}/>
           { showModal && <div className="modal" style={modalStyles}>
            <div className="navbar_phone_header">
              <h1>MAN</h1>
              <ImCross onClick={handleClose}/>
            </div>
            <nav>
              <Link to="/" className={activeTab === "home" ? 'active ':  'navList' } onClick={() => setActiveTab('home')}>Home</Link>
              <Link to="/about" className={activeTab === "about" ? 'active ':  'navList' } onClick={() => setActiveTab('about')}>About Us</Link>
              <Link to="/projects" className={activeTab === "projects" ? 'active ':  'navList' } onClick={() => setActiveTab('product')}>Projects</Link>
              <Link to="/investors" className={activeTab === "investors" ? 'active ':  'navList' } onClick={() => setActiveTab('investors')}>Investors</Link>
              <Link to="/media" className={activeTab === "media" ? 'active ':  'navList' } onClick={() => setActiveTab('media')}>Media</Link>
              <Link to="/careers" className={activeTab === "careers" ? 'active ':  'navList' } onClick={() => setActiveTab('careers')}>Careers</Link>
            </nav>
            <Link to="/contact"><button className='navbar_contact'>Contact</button></Link>
          </div>}
        </div>
    </div>
  )
}

export default Navbar;