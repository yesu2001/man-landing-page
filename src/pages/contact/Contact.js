import React from 'react'
import Layout from '../../components/layout/Layout'
import './contact.css'
function contact() {
  return (
    <Layout>
      <section className='one-sec-div-main one-img-cvr-div'>
                <div className='one-sec-div-main-wrap'>
                    <div className='pro-tit-div-wrap'>
                    <h1>CONTACT</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='con-ad-div-wrap'>
                    <h1>MAN, Inc.</h1>
                    <h2>1007 N Orange St. 4th Floor Suite #1377, Wilmington, DE - 19801.</h2>
                    <h4>office@maninc.co</h4>
                    <h3>maninc.co</h3>
                </div>
            </section>
            <section>
                <div className='txt-wri-con-div-wrap'>
                    <h1>WRITE US</h1>
                    <form method='POST' action='sendmail.php' enctype="multipart/form-data">
                        <div className='sec-div-form'>
                            <input placeholder='Name' name='name' id='name'></input>
                            <input placeholder='Email' name='mail' id='mail'></input>
                            <input placeholder='Subject' name='subject' id='subject'></input>
                        </div>
                        <div className='sec-div-txt-form'>
                            <textarea placeholder='Description' name='body' id='body'></textarea>
                            <button>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </section>
 
    </Layout>
  )
}

export default contact