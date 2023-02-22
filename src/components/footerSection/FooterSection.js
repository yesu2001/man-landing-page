import React from 'react'
import {ImTwitter} from 'react-icons/im';
import './FooterSection.css';

function FooterSection() {
  return (
    <div className='Footer'>
      <div className='footer_top'>
        <div className='footer_logo'>
          <b>MAN</b>
          <div className='footer_social'>
            <a target='_blank' href='https://twitter.com/MANcompanies'><ImTwitter/></a>
          </div>
        </div>
        <p className='footer_address'>
        Scottsbluff, New Hampshire,<br/> United States - 69361
        </p>
        <div className='footer_contact'>
          <p>(308) 632-8220</p>
          <p>maninc@gmail.com</p>
        </div>
        <ul className='footer_nav'>
          <li>About</li>
          <li>Project</li>
          <li>Services</li>
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