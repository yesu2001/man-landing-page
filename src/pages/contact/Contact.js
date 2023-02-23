import React from 'react'
import FooterSection from '../../components/footerSection/FooterSection'
import './contact.css'
import Navbar from '../../components/navbar/Navbar'
function contact() {
    document.title = 'Contact - MAN.'
  return (
    <div>
        <Navbar/>
        <section className='contact_section'>
            <h1 className="contact_title">CONTACT</h1>
            <div className='contact_section_one'>
                <h3>MAN, Inc.</h3>
                <b>1007 N Orange St. <br/> 4th Floor Suite<br/> #1377, Wilmington,<br/> DE - 19801.</b><br/>
                <p>office@maninc.co</p><br/>
                <p>maninc.co</p>
            </div>
            <div className='contact_section_form'>
                <h1>WRITE US</h1>
                <form method='POST' action='sendmail.php' enctype="multipart/form-data">
                    <input placeholder='Name' name='name' id='name'></input>
                    <input placeholder='Email' name='mail' id='mail'></input>
                    <input placeholder='Subject' name='subject' id='subject'></input>
                    <textarea placeholder='Description' name='body' rows='8'></textarea>
                    <input type="submit" className="submitbtn" value="SUBMIT"/>
                </form>
            </div>
        </section>
        <FooterSection/>
    </div>
  )
}

export default contact