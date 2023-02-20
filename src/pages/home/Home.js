import React from 'react'
// import NavbarSection from '../components/layout/Layout';
import AboutSection from '../../components/aboutSection/AboutSection';
import HeroSection from '../../components/heroSection/HeroSection';
import FooterSection from '../../components/footerSection/FooterSection';
import ProductSection from '../../components/productSection/ProductSection';
import Layout from '../../components/layout/Layout';

function home() {
  return (
    <Layout>
      <HeroSection/>
      <AboutSection/>
    </Layout>
  )
}

export default home