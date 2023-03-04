import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import './Investors.css';
import {Link} from 'react-router-dom';

function Investors() {
  document.title = 'Investors - MAN.';
  React.useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
      <div className="investors">
          <Navbar/>
          <h1 className='page_title'>Investors</h1>
          <div className="investors_section com_bg">
            <h2 className='section_title'>Letter to Shareholders</h2>
            <p>In 2022, as the Covid-19 pandemic persisted throughout the year, multiple uncertainties. In addition, we faced challenges on setting up the business environment. MAN recognizes sustainability management as a fundamental value and core aspect of our business, and we are devoted to fulfilling our social responsibilities as a global corporate citizen.
            The Company persevered and set on target & total commitment of our employees and partners.</p>
            <Link to="/investors/letters" className='link'>Learn more</Link>
          </div>
          <div className="investors_section">
            <h2 className='section_title'>Business principles</h2>
            <p>In an expression of its commitment to corporate social responsibility to grow as a world leading company, We announced the “Business Principles”.<br/>
            The principles serve as the global code of conduct in compliance with legal and ethical standards and the fulfilment of its corporate social responsibilities.</p>
            <Link to="/investors/principles" className='link'>Learn more</Link>
          </div>
          <div className="investors_section">
            <h2 className='section_title'>Meeting our customer's needs</h2>
            <p>We continually innovate and use industry-leading technology to safely produce lower-emission energy resources to affordably and reliably meet the fundamental needs of people around the world.<br/>
            Our upstream operations bring reliable and affordable energy solutions to the world through our project Energy.</p>
          </div>
          <div className="investors_section last_section">
            <h2 className='section_title'>Solutions for the energy transition</h2>
            <p>MAN's Project Energy is committed to help achieve a net-zero future. Our investments will enable us to achieve our emission-reduction goals and grow shareholder value across a broad range of future scenarios.
            </p>
          </div>
          <FooterSection/>
      </div>
  )
}

export default Investors