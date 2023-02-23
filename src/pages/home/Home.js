import React from 'react'
// import NavbarSection from '../components/layout/Layout';
import AboutSection from '../../components/aboutSection/AboutSection';
import HeroSection from '../../components/heroSection/HeroSection';
import FooterSection from '../../components/footerSection/FooterSection';
import ProductSection from '../../components/productSection/ProductSection';
import Navbar from '../../components/navbar/Navbar';
import './Home.css'
function home() {
  return (
    <div className="home">
      <HeroSection/>
      <AboutSection/>
      <FooterSection/>
    </div>
  )
}

export default home