import React from 'react'
import {Link} from 'react-router-dom';
// import NavbarSection from '../components/layout/Layout';
import FooterSection from '../../components/footerSection/FooterSection';
import Navbar from '../../components/navbar/Navbar';
import './Home.css'
import careerimg from '../../images/career.jpg';
import sustainimg from '../../images/sustain.jpg';
import purposeimg from '../../images/purpose.jpg';
import aboutimg from '../../images/about.jpg';

function Home() {
  document.title = 'Home - MAN.';
  React.useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div className="home">
      <Navbar/>
      <div className="section_container">
      <section className='hero_section'>
        <div className='hero_section_content'>
          <h1 className='hero_heading'>INTRODUCING PROJECT <p className='large'>ENERGY</p></h1>
          <p className='hero_subheading'>Say Goodbye to Slow and Inconvenient Charging Our Product Offers the Fastest and Most Reliable Charging Experience Yet.</p><br/>
          <Link to="/projects/ourprojects"><button className='hero_checkout'>Learn more</button></Link>
        </div>
      </section>
      <section className='home_section com_bg'>
        <div>
          <img src={aboutimg} alt="about illustration"/>
        </div>
        <div>
          <h1 className='section_title'>About us</h1>
          <p className='about_para'>
          MAN create & innovative products with unique structure and resilience. We are passionate about our products & service and how they empower our customer's lives. Founded in end of 2021, we grew quickly thanks to our committed contributors and shareholders.
          </p>
          <Link to='/about'><button className='about_learnmore'>learn more</button></Link>
        </div>
      </section>
      <section className="home_section sec_sustain">
        <div>
          <h1 className='section_title'>Sustainability</h1>
          <p>Creating a culture of sustainable creativity.</p>
          <p>The concerns and growing awareness among all stakeholders about global warming and climate change debate poses serious challenges. At MA, we are committed to tackling the issues of Climate Change by adopting Sustainable and responsible growth. To achieve this, we have developed a Sustainability Model.</p>
          <Link to="/sustainability"><button>LEARN MORE</button></Link>
        </div>
        <div>
          <img src={sustainimg} alt="sustainability illustration"/>
        </div>
      </section>
      <section className="home_section sec_usa com_bg">
        <div>
          <img src={purposeimg} alt="purpose illustration"/>
        </div>
        <div>
          <h1 className='section_title'>Our Purpose in USA</h1>
          <p>Building the electric-vehicle charging infrastructure America needs.</p>
          <Link to="/projects/ourprojects"><button>LEARN MORE</button></Link>
        </div>
      </section>
      <section className="home_section sec_join_us">
        <div>
          <h1 className='section_title'>Join Us</h1>
          <p>When you work here, you get that our values are more than just words on paper. You’re joining a place where diversity, equity, and inclusion are at the heart of our business practices and culture.</p>
          <Link to="/careers"><button>Careers</button></Link>
        </div>
        <div>
          <img src={careerimg} alt="career illustration"/>
        </div>
      </section>
      </div>
      <FooterSection/>
    </div>
  )
}

export default Home