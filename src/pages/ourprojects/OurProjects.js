import React from 'react';
import './OurProjects.css';
import { BsDownload } from 'react-icons/bs';
import { BsPrinter } from 'react-icons/bs';
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import VidUS from '../../videos/US.mp4';
import { TiTick } from 'react-icons/ti';

function OurProjects() {
  document.title = 'US Projects- MAN.';
  React.useEffect(() => {
    window.scrollTo(0,0);
},[])

	return (
		<div>
            <Navbar/>
			<section className='main-title-div'>
                <div className='main-title-div-wrap'>
                    <video src={VidUS} autoPlay muted loop className='videoo' ></video>
                    <div className='eu-div-wrap'>
                    <h2>Building the electric-vehicle charging<br/> infrastructure America needs</h2>
                    </div>
                </div>
            </section>
                <div className='h1po'>
                    <h1>Whether it’s in our neighborhoods or around the world, more people and more goods are moving faster than ever before – by cars, trucks, ships and planes. Meeting global transportation needs while managing emissions requires multiple solutions.</h1>
                </div>
                <div className='hp-ee'>
                    <h1>Customer-centric approach</h1>
                    <div className='cc-ap-div'>
                        <div>
                            <h2>MEET<br/> ALL <br/>CUSTOMERS<br/> EXPECTATIONS</h2>
                        </div>
                        <div>
                            <h2>ENHANCE<br/> OUR <br/>BRANDS<br/> DNA</h2>
                        </div>
                        <div>
                            <h2>OFFERS<br/> AFFORDABLE<br/> CHARGING</h2>
                        </div>
                        <div>
                            <h2>EVOLVE<br/>INNOVATE</h2>
                        </div>
                    </div>
                </div>
                <section className='ee-pp-di-wr'>
                    <div className='ee-cn-div'>
                        <h1>Customer's Expectation</h1>
                        <div className='ee-sep-div'>
                            <div className='test-img'></div>
                            <div>
                                <h3>ECO<br/> CONSCIOUSNESS</h3>
                                <p><span>65%</span><br/>of people worldwide consider “preserving the environment” as most important value.</p>
                            </div>
                            <div>
                                <h3>EV<br/> RANGE</h3>
                                <p><span>80%</span><br/>of customers in the small cars segment.</p>
                                <p><span>90%</span><br/>of customers in the compact and mid size cars segment.</p>
                                <p><span>100%</span><br/>of customers in the LCV.</p>
                            </div>
                            <div>
                                <h3>AFFORDABILITY<br/>COST</h3>
                                <p>From 2026 EV Cost of Ownership will be equal to ice.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-col'>
                    <div className='bg-wrp'>
                        <h1>Charging</h1>
                        <p>End-to-end Charging and Energy solution providing the best customer experience.</p>
                        <div className='c-wrp-div'>
                            <div className='c-img-div'></div>
                            <div>
                                <div>
                                    <h2> <TiTick/> Offering Charging Unit with dual cabels.</h2>
                                    <h2><TiTick/> 24/7 Smart Charging.</h2>
                                    <h2><TiTick/> Easy Customer Experince.</h2>
                                    <h2><TiTick/> Cutting Edge Design.</h2>
                                    <h2><TiTick/> Launching a Rapid charging Network.</h2>
                                    <h2><TiTick/> Simplified.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-bg'>
                    <div>
                        <h1>Premiere Rapid-Charging Network</h1>
                            <p><TiTick/> Upcoming USA Best EV infrastructure Project.</p>
                            <p><TiTick/> Planning to invest in contactless wireless charging.</p>
                            <p><TiTick/> Intergated with efficient energy storage.</p>
                        <div className='sec-wrp-div-ig'>
                            <div className='sec-con-div'>
                                <div>
                                    <div>
                                        <h2>2025</h2>
                                        <h3><span>1500</span> Location</h3>
                                        <h3><span>5000</span> Chargers</h3>
                                    </div>
                                    <div>
                                        <h2>2027</h2>
                                        <h3><span>5000</span> Location</h3>
                                        <h3><span>15000</span> Chargers</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='sec-ig-div'>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='pp-ee'>
                    <h2>Partnerships and collaborations</h2>
                    <p>We constantly look for new ideas. Our engineers and scientists collaborate with other companies and organizations to find ways to improve efficiency and help lower emissions for several modes of transportation.</p>
                </div>
                <section className='pr-wrp-div'>
                    <h1>Product</h1>
                    <div className='IA'>
                        <div className='IA-wrp'>
                            <h2>Energy</h2>
                            <h3>Series F1</h3>
                            <p>Inbuilt Racing Formula.</p>
                        </div>
                    </div>
                    <div className='IB'>
                    <div className='IA-wrp'>
                            <h2>Energy</h2>
                            <h3>Series CLS</h3>
                            <p>Classic.</p>
                        </div>
                    </div>
                    <div className='dis-wrp'>
                        <p>Engineering prototype only, Currently not for qualification or production. </p>
                    </div>
                </section>
                <FooterSection/>
		</div>
	)
}

export default OurProjects;