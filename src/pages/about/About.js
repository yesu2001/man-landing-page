import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { ImEarth } from 'react-icons/im';
import { BsRecycle } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { TbBuildingFactory2 } from 'react-icons/tb';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import './About.css'
import Management from '../management/Management';

function About() {
  document.title = 'About - MAN.';
  React.useEffect(() => {
    window.scrollTo(0,0);
},[])
  return (
    <div>
      <Navbar/>
      <div className="about_page">
        <div className="about_section">
          <div>
            <div className='about_section_title'>
              <h2>MISSION</h2>
              {/* <h2>I</h2>
              <h2>S</h2>
              <h2>S</h2>
              <h2>I</h2>
              <h2>O</h2>
              <h2>N</h2> */}
            </div>
            <div className='about_section_content'>
              <h2 className='about_section_subheading'>Promise To Grow Responsibly</h2>
              <div className='about_section_para'>
                <p>MAN is committed to complying with local laws and regulations as well as applying a strict global code of conduct to all employees.</p>
                <p>It believes that ethical management is not only a tool for responding to the rapid changes in the global business environment, but also for building trust with its various stakeholders including customers, shareholders, employees, business partners and local communities.
                </p>
                <p>With an aim to become one of the most responsible companies In the world.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='about_section'>
          <div>
            <div className='about_section_title'>
              <h2>STORY</h2>
              {/* <h2>T</h2>
              <h2>O</h2>
              <h2>R</h2>
              <h2>Y</h2> */}
            </div>
            <div className='about_section_content'>
              <h2 className='about_section_subheading'>Who we are</h2>
              <div className="about_section_para">
                <p>
                MAN commenced its operations in the year 2022, since then the company has periodically incorporated innovative production technologies and updated its methods to match current global standards ensuring over all optimization of its processes.</p>
                <p>Our firm is designed to operate as one—a single global corporation united by a strong set of values, including a deep commitment to diversity, and a common purpose: to create positive, enduring change in the world.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='about_section'>
          <h2 className='section_title'>Management committee</h2>
          <div className='about_section_content'>
            <p>Our Directors, officers and employees of MAN, Inc is the corporation's greatest strength.<br/>
  Antony was appointed Chief executive officer and Secretary of MAN in 2022. He also serves on the board of directors of MAN, Inc.<br/>
  Mounesh Kumar joined the Management Committee as President in 2022. MK is a member of the board of directors and has progressed through the organization's engineering, operations, planning, and commercial capacities.
  <br/><Link to="/about/management" className="btn">Learn more <HiArrowLongRight/></Link>
  </p>
          </div>
        </div> */}
        <hr/>
        <Management/>
        <hr/>
        <div className='about_div'>
          <h2 className='about_div_header'>Our commitment</h2>
          <div className='about_section_para'>
            <p>
            We are dedicated to managing our firm and working with our clients in ways that benefit individuals, communities, and the environments they live in.We will reach net-zero climate impact by 2030 through decarbonizing our operations, investing in natural climate solutions, and accelerating progress through partnerships.
  We have a deep and longstanding commitment to advancing diversity, equity, and inclusion in business, in society, and within our firm.
            </p>
          </div>
        </div>
        <hr/>
        <div className='about_div'>
          <h2 className='about_div_header'>Our guiding principles</h2>
          <div className='about_section_para'>
          <p>We are committed to enhancing the long-term value of the investment dollars entrusted to us by our shareholders. By running the business responsibly, we expect our shareholders to be rewarded with superior returns.
Success depends on our ability to consistently satisfy ever-changing customer preferences. We commit to being innovative and responsive, while offering high-quality products and services.

The exceptional quality of our workforce provides a valuable competitive edge. To build on this advantage, we will strive to hire and retain the most qualified people.

We commit to being a good corporate citizen in all the places we operate worldwide. We will maintain high ethical standards, obey all applicable laws, rules, and regulations.</p>
          </div>
        </div>
        <hr/>
        <div className='about_div'>
            <h2 className='about_div_header'>Our Project Commitment</h2>
            <div className='about_section_para'>
              <p>Affordable and sustainable energy solutions are required to advance global prosperity. We invest in technology and communities to bring the world better energy</p>
              <div className="section_list">
                <div>
                    <p>Improving energy access</p>
                    <HiOutlineLightBulb/>  
                </div>
                <div>
                    <p>Sustainability</p>
                    <ImEarth />  
                </div>
                <div>
                    <p>Improving efficiency</p>
                    <BsRecycle/>  
                </div> 
                <div>
                    <p>Outreach</p>
                    <FaHandshake/>  
                </div>
                <div>
                    <p>Emission Control</p>
                    <TbBuildingFactory2/>  
                </div>
                <div>
                    <p>Job Creation</p>  
                    <BsFillPersonBadgeFill/>  
                </div>
              </div>
            </div>
        </div>
        <hr/>
        <div className='about_div'>
            <h2 className='about_div_header'>Sustainable Growth.</h2>
            <div className='about_section_para'>
              <p>We are being a responsible and pioneering business. It goes back to the 2022 days of our founders, who launched one of the purposeful brands for the future. And it is how we run our company today.We strive to do more good for our planet and our society – not just less harm. We want to act on the social and environmental issues facing the world and we want to empower people’s lives with our innovative, sustainable products.This is how we will grow our business.</p>
            </div>
        </div>
        <hr/>
        <div className='about_div'>
            <h2 className='about_div_header'>Connect with us.</h2>
            <div className="about_section_para">
            <p>Thanks for your interest in MAN. We want to help serve you better and improve your experience with our company.Please note this contact option is only for customers based in the US & EU.If you've already used our standard contact channels and would still like to get in touch, please contact me directly using email.While I'm not able to respond to every email, your comments are always taken seriously and will be shared with the relevant teams.<br/>Kind regards<br/>
            <br/><i>President,</i><br/>MAN, Inc.</p>
            </div>
        </div>
        </div>
        <FooterSection/>
      </div>
  )
}

export default About