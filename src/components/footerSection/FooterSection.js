import React from 'react'
import {ImTwitter} from 'react-icons/im';
import './FooterSection.css';
import {Link} from 'react-router-dom'
function FooterSection() {
  return (
    <div className='Footer'>
      <hr/>
      <div className='footer_top'>
        <div className='footer_logo'>
          <b>MAN</b>
          <div className='footer_social'>
            <a target='_blank' href='https://twitter.com/MANcompanies'><ImTwitter/></a>
          </div>
        </div>
        <div className="footer_middle">
          <p className='footer_address'>
          Scottsbluff, New Hampshire,<br/> United States - 69361
          </p>
          <div className='footer_contact'>
            <p>(308) 632-8220</p>
            <p>maninc@gmail.com</p>
          </div>
        </div>
        <ul className='footer_nav'>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Project</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
      </div>
      <hr/>
      <div className='footer_bottom'>
        <p>© 2022 MAN, Inc. All Rights Reserved.</p>
        <p>
          <a href='/privacy'>Privacy</a>
          <a href='/legal'>Legal</a>
        </p>
      </div>
    </div>
  )
}

export default FooterSection;