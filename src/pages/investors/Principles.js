import React from 'react'
import Layout from '../../components/layout/Layout'
import './Investors.css';

import { GoLaw } from 'react-icons/go';
import { IoIosPeople } from 'react-icons/io';
import { FaHandshake } from 'react-icons/fa';
import { SiGumtree } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';

function Principles() {
  return (
    <Layout>
      <div className="principles">
          <section className="prin_section_one">
            <p>MAN's Management Philosophy is to "devote our human resources and technology to create superior products and services, thereby contributing to a better global society." MAN's code of conduct is the foundation that allows us to create a fair, clean, and transparent corporate culture.</p>
          </section>
          <section className="prin_section_two">
            <h2>Corporate and Social Responsibilities.</h2>
            <h6>In fulfilling our corporate and social responsibilities, MAN Inc adheres to five business principles.</h6>
            <div className='section_two_div'>
              <div>
                  <GoLaw size='50px' color='#5a5a5a'/>
                  <h3>Principle 1.</h3>
                  <p>We comply with laws and ethical standards.</p>
              </div>
              <div>
                  <IoIosPeople size='50px' color='#5a5a5a'/>
                  <h3>Principle 2.</h3>
                  <p>We maintain a clean organizational culture.</p>
              </div>
              <div>
                  <FaHandshake size='50px' color='#5a5a5a'/>
                  <h3>Principle 3.</h3>
                  <p>We respect customers, shareholders and employees.</p>
              </div>
              <div>
                  <SiGumtree size='50px' color='#5a5a5a'/>
                  <h3>Principle 4.</h3>
                  <p>We care for the environment, health and safety.</p>
              </div>
              <div>
                  <TbWorld size='50px' color='#5a5a5a'/>
                  <h3>Principle 5.</h3>
                  <p>We are a socially responsible corporate citizen.</p>
              </div>
            </div>
          </section>
      </div>
    </Layout>
  )
}

export default Principles