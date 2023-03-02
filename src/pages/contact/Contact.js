import React from 'react'
import FooterSection from '../../components/footerSection/FooterSection'
import './contact.css'
import Navbar from '../../components/navbar/Navbar';
import {ImLocation2} from 'react-icons/im'
import {ImSphere} from 'react-icons/im'
import {ImMail2} from 'react-icons/im'

function contact() {
    document.title = 'Contact - MAN.'
  return (
    <div>
        <Navbar/>
        <h1 className="page_title">Contact</h1>
        <section className='contact_section'>
            <div className='contact_section_one'>
                <h3>MAN, Inc.</h3>
                <div>
                    <ImLocation2/>
                    <p>1007 N Orange St. 4th Floor Suite #1377, Wilmington, DE - 19801.</p>
                </div>
                <div>
                    <ImMail2/>
                    <p>office@maninc.co</p>
                </div>
                <div>
                    <ImSphere/>
                    <p>maninc.co</p>
                </div>
            </div>
            <div className='contact_section_form'>
                <h3 className="section_title">WRITE US</h3>
                <form method='POST' action='sendmail.php' enctype="multipart/form-data">
                    <input placeholder='Name' name='name' id='name'></input>
                    <input placeholder='Email' name='mail' id='mail'></input>
                    <input placeholder='Subject' name='subject' id='subject'></input>
                    <input placeholder='description' name='description' id='description'></input>
                    {/* <textarea placeholder='Description' name='body' rows='8' cols='3'></textarea> */}
                    <input type="submit" className="submitbtn" value="SUBMIT"/>
                </form>
            </div>
        </section>
        <FooterSection/>
    </div>
  )
}

export default contact