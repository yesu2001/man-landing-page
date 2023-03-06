import React from 'react'
import FooterSection from '../../components/footerSection/FooterSection'
import './contact.css'
import Navbar from '../../components/navbar/Navbar';
import {ImLocation2} from 'react-icons/im'
import {ImSphere} from 'react-icons/im'
import {ImMail2} from 'react-icons/im'
import contact_us from '../../images/contact_us.jpg'

function Contact() {
    document.title = 'Contact - MAN.'

    React.useEffect(() => {
        window.scrollTo(0,0);
    },[])

  return (
    <div>
        <Navbar/>
        <section className='contact_section'>
            <div className='contact_section_one'>
               <img src={contact_us} alt="contact_us image" />
            </div>
            <div className='contact_section_form'>
                <h3 className="section_title">WRITE US</h3>
                <form method='POST' action='sendmail.php' enctype="multipart/form-data">
                    <input placeholder='Name' name='name' id='name'></input>
                    <input placeholder='Email' name='mail' id='mail'></input>
                    <input placeholder='Subject' name='subject' id='subject'></input>
                    <textarea rows={10} placeholder='Description' name='description' id='description'></textarea>
                    {/* <textarea placeholder='Description' name='body' rows='8' cols='3'></textarea> */}
                    <input type="submit" className="submitbtn" value="SUBMIT"/>
                </form>
            </div>
        </section>
        <FooterSection/>
    </div>
  )
}

export default Contact