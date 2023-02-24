import React from 'react'
import {Link} from 'react-router-dom';
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
      <section className="home_section sec_sustain">
        <div>
          <h1>SUSTAINABITLITY</h1>
          <p>Creating a culture of sustainable creativity.</p>
          <p>The concerns and growing awareness among all stakeholders about global warming and climate change debate poses serious challenges. At MA, we are committed to tackling the issues of Climate Change by adopting Sustainable and responsible growth. To achieve this, we have developed a Sustainability Model.</p>
          <Link to="/sustainability"><button>LEARN MORE</button></Link>
        </div>
      </section>
      <section className="home_section sec_usa">
        <div>
          <h1>OUR PURPOSE IN USA</h1>
          <p>Building the electric-vehicle charging infrastructure America needs.</p>
          <Link to="/projects/ourprojects"><button>LEARN MORE</button></Link>
        </div>
      </section>
      <section className="home_section sec_join_us">
        <div>
          <h1>JOIN US</h1>
          <p>When you work here, you get that our values are more than just words on paper. You’re joining a place where diversity, equity, and inclusion are at the heart of our business practices and culture.</p>
          <Link to="/careers"><button>Careers</button></Link>
        </div>
      </section>
      <FooterSection/>
    </div>
  )
}

export default home