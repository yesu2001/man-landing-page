import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import './Media.css'
function Media() {
    React.useEffect(() => {
        window.scrollTo(0,0);
    },[])
  document.title = 'Media - MAN.';
  return (
    <div>
        <Navbar/>
        <div className='media_section'>
            <h3 className="section_title">MAN Campaign Announcement</h3>
            <p>As we approach this $1mm maximum, the campaign we planned to start on February of (2023).</p>
            <p><span>December 30, 2022</span></p>
        </div>
        <hr/>
        <div className='media_section'>
            <h3 className="section_title">CEO Announcement</h3>
            <p>We're pleased to announce Joe Antony as our new CEO.</p>
            <p><span>December 29, 2022</span></p>
        </div>
        <hr/>
        <div className='media_section'>
            <h3 className="section_title">It's Official!</h3>
            <p>We have been sucessfully incorporated our business officially.</p>
            <p><span>December 16, 2022</span></p>
        </div>
        <hr/>
        <div className='media_section'>
            <h3 className="section_title">Project Energy Announcement</h3>
            <p>Project energy has been initaited its phase one sucessfully.</p>
            <p><span>December 1, 2022</span></p>
        </div>
        <FooterSection/>
    </div>
  )
}

export default Media