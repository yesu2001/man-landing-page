import React from 'react'
import {ImTwitter} from 'react-icons/im';
import './FooterSection.css';
import {Link} from 'react-router-dom'
function FooterSection() {
  return (
    <div className='Footer'>
      <div className='footer_top'>
        <div className='footer_logo'>
          <b>MAN</b>
          <div className='footer_social'>
            <Link target='_blank' to='https://twitter.com/MANcompanies'><p><ImTwitter/></p></Link>
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
      </div>
      <hr/>
      <div className='footer_bottom'>
        <p>© 2022 MAN, Inc. All Rights Reserved.</p>
        <p>
          <Link to='/privacy'><p>Privacy</p></Link>
          <Link to='/legal'><p>Legal</p></Link>
        </p>
      </div>
    </div>
  )
}

export default FooterSection;