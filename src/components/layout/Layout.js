import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Layout.css';
import FooterSection from '../footerSection/FooterSection';

function Layout({children}) {
  const [activeTab,setActiveTab] = useState('home');

  
  return (
    <div className="Layout">
      <div className='Navbar'>
          <b className="navbar_logo">MAN</b>
          <nav className='navbar_nav'>
              <Link to="/" className={activeTab === "home" ? 'active ':  'navList' } onClick={() => setActiveTab('home')}>Home</Link>
              <Link to="/about" className={activeTab === "about" ? 'active ':  'navList' } onClick={() => setActiveTab('about')}>About Us</Link>
              <Link to="/projects" className={activeTab === "projects" ? 'active ':  'navList' } onClick={() => setActiveTab('product')}>Projects</Link>
              <Link to="/investors" className={activeTab === "investors" ? 'active ':  'navList' } onClick={() => setActiveTab('investors')}>Investors</Link>
              <Link to="/media" className={activeTab === "media" ? 'active ':  'navList' } onClick={() => setActiveTab('media')}>Media</Link>
              <Link to="/careers" className={activeTab === "careers" ? 'active ':  'navList' } onClick={() => setActiveTab('careers')}>Careers</Link>
          </nav>
          <button className='navbar_contact'><Link to="/contact">Contact</Link></button>
      </div>
      {children}
      <FooterSection />
    </div>
  )
}

export default Layout;