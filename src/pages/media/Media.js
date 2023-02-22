import React from 'react'
import Layout from '../../components/layout/Layout'

function Media() {
  return (
    <Layout>
      <section className='one-sec-div-main one-img-cvr-div'>
                <div className='one-sec-div-main-wrap'>
                    <div className='pro-tit-div-wrap'>
                        <h1>NEWSROOM & MEDIA</h1>
                    </div>
                </div>
            </section>
            <section className='new-div-sec'>
                <div className='new-div-wrap'>
                    <h1>MAN Campaign Announcement</h1>
                    <p>As we approach this $1mm maximum, the campaign we planned to start on February of (2023).</p>
                    <p><span>December 30, 2022</span></p>
                </div>
                <hr/>
                <div className='new-div-wrap'>
                    <h1>CEO Announcement</h1>
                    <p>We're pleased to announce Joe Antony as our new CEO.</p>
                    <p><span>December 29, 2022</span></p>
                </div>
                <hr/>
                <div className='new-div-wrap'>
                    <h1>It's Official!</h1>
                    <p>We have been sucessfully incorporated our business officially.</p>
                    <p><span>December 16, 2022</span></p>
                </div>
                <hr/>
                <div className='new-div-wrap'>
                    <h1>Project Energy Announcement</h1>
                    <p>Project energy has been initaited its phase one sucessfully.</p>
                    <p><span>December 1, 2022</span></p>
                </div>
            </section>
    </Layout>
  )
}

export default Media