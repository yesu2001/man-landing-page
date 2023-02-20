import React from 'react'
import Layout from '../../components/layout/Layout'
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { ImEarth } from 'react-icons/im';
import { BsRecycle } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { TbBuildingFactory2 } from 'react-icons/tb';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import './About.css'

function about() {
  return (
    <Layout>
      <div className="about_page">
        <h1 className='aboutpage_title'>About Us</h1>
        <div className="about_page_moto">
          <h3>Promise To Grow Responsibly</h3>
          <p>MAN is committed to complying with local laws and regulations as well as applying a strict global code of conduct to all employees.</p>
          <p>It believes that ethical management is not only a tool for responding to the rapid changes in the global business environment, but also for building trust with its various stakeholders including customers, shareholders, employees, business partners and local communities.
          </p>
          <p>With an aim to become one of the most responsible companies In the world.</p>
        </div>
        <div className='section com_bg'>
          <h3>Who we are</h3>

          <p>
          MAN commenced its operations in the year 2022, since then the company has periodically incorporated innovative production technologies and updated its methods to match current global standards ensuring over all optimization of its processes.<br/>
Our firm is designed to operate as one—a single global corporation united by a strong set of values, including a deep commitment to diversity, and a common purpose: to create positive, enduring change in the world.</p>

        </div>
        <div className='section'>
          <h3>Management committee</h3>
          <p>Our Directors, officers and employees of MAN, Inc is the corporation's greatest strength.<br/>
Antony was appointed Chief executive officer and Secretary of MAN in 2022. He also serves on the board of directors of MAN, Inc.<br/>
Mounesh Kumar joined the Management Committee as President in 2022. MK is a member of the board of directors and has progressed through the organization's engineering, operations, planning, and commercial capacities.
<br/><Link to="/about/management" className="btn">Learn more <HiArrowLongRight/></Link>
</p>

        </div>
        <div className='section com_bg'>
          <h3>Our commitment</h3>
          <p>
          We are dedicated to managing our firm and working with our clients in ways that benefit individuals, communities, and the environments they live in.<br/>We will reach net-zero climate impact by 2030 through decarbonizing our operations, investing in natural climate solutions, and accelerating progress through partnerships.<br/>
We have a deep and longstanding commitment to advancing diversity, equity, and inclusion in business, in society, and within our firm.
          </p>
        </div>
        <div className='section '>
          <h3>Our guiding principles</h3>
          <p>We are committed to enhancing the long-term value of the investment dollars entrusted to us by our shareholders. By running the business responsibly, we expect our shareholders to be rewarded with superior returns.<br/>
Success depends on our ability to consistently satisfy ever-changing customer preferences. We commit to being innovative and responsive, while offering high-quality products and services.
<br/>
The exceptional quality of our workforce provides a valuable competitive edge. To build on this advantage, we will strive to hire and retain the most qualified people.
<br/>
We commit to being a good corporate citizen in all the places we operate worldwide. We will maintain high ethical standards, obey all applicable laws, rules, and regulations.</p>
        </div>
        <div className='section com_bg'>
                        <h3>Our Project Commitment</h3>
                        <div className='about_page_commitment'>
                          <p>Affordable and sustainable energy solutions are required to advance global prosperity. We invest in technology and communities to bring the world better energy</p>
                      <div>
                          <h4>Improving energy access</h4>
                          <HiOutlineLightBulb/>  
                      </div>
                      <div>
                          <h4>Sustainability</h4>
                          <ImEarth />  
                      </div>
                      <div>
                          <h4>Improving efficiency</h4>
                          <BsRecycle/>  
                      </div> 
                      <div>
                          <h4>Outreach</h4>
                          <FaHandshake/>  
                      </div>
                      <div>
                          <h4>Emission Control</h4>
                          <TbBuildingFactory2/>  
                      </div>
                      <div>
                          <h4>Job Creation</h4>  
                          <BsFillPersonBadgeFill/>  
                      </div>
                  </div>
                </div>
                <div className='section '>
                    <h3>Sustainable Growth.</h3>
                    <p>We are being a responsible and pioneering business. It goes back to the 2022 days of our founders, who launched one of the purposeful brands for the future. And it is how we run our company today.<br/>We strive to do more good for our planet and our society – not just less harm. We want to act on the social and environmental issues facing the world and we want to empower people’s lives with our innovative, sustainable products.<br/>This is how we will grow our business.</p>
                </div>
                <div className='section com_bg'>
                    <h3>Connect with us.</h3>
                    <p>Thanks for your interest in MAN. We want to help serve you better and improve your experience with our company.<br/>Please note this contact option is only for customers based in the US & EU.<br/>If you've already used our standard contact channels and would still like to get in touch, please contact me directly using email.<br/>While I'm not able to respond to every email, your comments are always taken seriously and will be shared with the relevant teams.<br/>Kind regards<br/>
                    <br/><i>President,</i><br/>MAN, Inc.</p>
                </div>
        </div>
    </Layout>
  )
}

export default about