import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import './Investors.css';
import {Link} from 'react-router-dom';
function Investors() {
  document.title = 'Investors - MAN.';
  return (
      <div className="investors">
          <Navbar/>
          <h1 className='page_title'>Investors</h1>
          <div className="investors_section">
            <h2>Letter to Shareholders</h2>
            <p>In 2022, as the Covid-19 pandemic persisted throughout the year, multiple uncertainties. In addition, we faced challenges on setting up the business environment. MAN recognizes sustainability management as a fundamental value and core aspect of our business, and we are devoted to fulfilling our social responsibilities as a global corporate citizen.br/>
            The Company persevered and set on target & total commitment of our employees and partners.</p>
            <Link to="/investors/letters" className='link'>Learn more</Link>
          </div>
          <div className="investors_section">
            <h2>Business principles</h2>
            <p>In an expression of its commitment to corporate social responsibility to grow as a world leading company, We announced the “Business Principles”.<br/>
            The principles serve as the global code of conduct in compliance with legal and ethical standards and the fulfilment of its corporate social responsibilities.</p>
            <Link to="/investors/principles" className='link'>Learn more</Link>
          </div>
          <div className="investors_section">
            <h2>Meeting our customer's needs</h2>
            <p>We continually innovate and use industry-leading technology to safely produce lower-emission energy resources to affordably and reliably meet the fundamental needs of people around the world.<br/>
            Our upstream operations bring reliable and affordable energy solutions to the world through our project Energy.</p>
          </div>
          <div className="investors_section last_section">
            <div className="last_section_content">
              <h2>Solutions for the energy transition</h2>
              <p>MAN's Project Energy is committed to help achieve a net-zero future. Our investments will enable us to achieve our emission-reduction goals and grow shareholder value across a broad range of future scenarios.
              </p>
            </div>
            {/* <div className="last_section_image">
              <img src="" alt="smoke image"/>
            </div> */}
          </div>
          <FooterSection/>
      </div>
  )
}

export default Investors