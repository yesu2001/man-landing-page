import React from 'react'
import {ImTwitter} from 'react-icons/im';
import './FooterSection.css';
import {Link} from 'react-router-dom'
function FooterSection() {
  return (
    <div className='Footer'>
      <div className='footer_social'>
        <Link target='_blank' className="white_icon" to='https://twitter.com/MANcompanies'><p><ImTwitter size={30}/></p></Link>
      </div>
      <hr/>
      <div>
        <Link to='/privacy' className="white_icon"><p>Privacy</p></Link>
        <Link to='/legal' className="white_icon"><p>Legal</p></Link>
      </div>
      <p>© 2022 MAN, Inc. All Rights Reserved.</p>
    </div>
  )
}

export default FooterSection;