import React from 'react'
import './Investors.css';
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import { GoLaw } from 'react-icons/go';
import { IoIosPeople } from 'react-icons/io';
import { FaHandshake } from 'react-icons/fa';
import { SiGumtree } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';


function Principles() {
  document.title = 'Principles - MAN.';

  return (
      <div className="principles">
        <Navbar/>
        <h3>MAN's Management Philosophy is to <span style={{color: '#FF4240'}}>"devote our human resources and technology to create superior products and services, thereby contributing to a better global society." </span>MAN's code of conduct is the foundation that allows us to create a fair, clean, and transparent corporate culture.</h3>
        <section className="principles_section">
          <h2>Corporate and Social Responsibilities.</h2>
          <h6>In fulfilling our corporate and social responsibilities, MAN Inc adheres to five business principles.</h6>
          <div className='principles_list'>
            <div>
                <GoLaw size='50px' color='black'/>
                <h3>Principle 1.</h3>
                <p>We comply with laws and ethical standards.</p>
            </div>
            <div>
                <IoIosPeople size='50px' color='black'/>
                <h3>Principle 2.</h3>
                <p>We maintain a clean organizational culture.</p>
            </div>
            <div>
                <FaHandshake size='50px' color='black'/>
                <h3>Principle 3.</h3>
                <p>We respect customers, shareholders and employees.</p>
            </div>
            <div>
                <SiGumtree size='50px' color='black'/>
                <h3>Principle 4.</h3>
                <p>We care for the environment, health and safety.</p>
            </div>
            <div>
                <TbWorld size='50px' color='black'/>
                <h3>Principle 5.</h3>
                <p>We are a socially responsible corporate citizen.</p>
            </div>
          </div>
        </section>
          <FooterSection/>
      </div>
  )
}

export default Principles