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
            <Link target='_blank' className="white_icon" to='https://twitter.com/MANcompanies'><p><ImTwitter/></p></Link>
          </div>
        </div>
        <div className="footer_middle">
          <p className='footer_address'>
          1007 N Orange St.<br/> 4th Floor Suite #1377, <br/> Wilmington, DE - 19801.
          </p>
        </div>
        <div className='footer_contact'>
          <p>(308) 632-8220</p>
          <p>office@maninc.co</p>
        </div>
      </div>
      <hr/>
      <div className='footer_bottom'>
        <p>© 2022 MAN, Inc. All Rights Reserved.</p>
        <div>
          <Link to='/privacy' className="white_icon"><p>Privacy</p></Link>
          <Link to='/legal' className="white_icon"><p>Legal</p></Link>
        </div>
      </div>
    </div>
  )
}

export default FooterSection;