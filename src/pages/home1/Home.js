import './Home.css';
// import MainHeader from '../Header/header';
// import MainFooter from '../Footer/footer';

// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import { Link } from "react-router-dom";
import { BsArrowUpRight } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function Home({news,celcius,sub}) {
  document.title = 'MAN'


  return (
    <div className="Home">
        <Navbar/>
      <section className='one-sec-div-main'>
        <div className='one-sec-div-main-wrap'>
          {/* <MainHeader/> */}
          <div className='sec-one-div-wrap'>
          {/* <Fade big> */}
            <h2>INTRODUCING</h2>
            {/* </Fade>
            <Fade big> */}
            <h1>Energy</h1>
            {/* </Fade> */}
            <div>
            {/* <Fade big> */}
              <Link to="/projects/ourprojects"><button>Learn more</button></Link>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </section>
      {/* <Fade big> */}
      <section>
        <div className='con-man-div'>
            <h1>Insights.</h1>
          </div>
        <div  className='hme-grd-div'>
          <div className='hme-div-main'>
            <div id='exp'>
              {/* <Zoom top> */}
                <h1>Energy</h1>
                {/* </Zoom> */}
            </div>
            <div id='n-div'>
              <div>
                <h1><span>UPDATES</span><br/>TODAY</h1>
              </div>
              <div>
                <h2 id='news'>{news}</h2>
                <p id='sub'>Source : {sub}</p>
              </div>
            </div>
            <div id='cls'>
            </div>
            <div>
              <h1 id='cycle'>{celcius}</h1>
              <p>CO<sub>2</sub> in atmosphere&nbsp;(Million)</p>
            </div>
            <div>
              <h1>Sustainability</h1>
              <p>The concerns and growing awareness among all stakeholders about global warming and climate change debate poses serious challenges.</p>
            </div>
          </div>
        </div>
      </section>
      {/* </Fade>
      <Fade big> */}
      <section className='con-main'>
        <div>
          <div className='con-man-div'>
            <h1>Charge & Move on.</h1>
          </div>
          <div className='bg-img-div'></div>
          <div className='con-min-div'>
            <h2>General Specification</h2>
            <h1><BsCheckCircleFill/>&nbsp;&nbsp;Charge up to 2 vehicles simultaneously</h1>
            <h1><BsCheckCircleFill/>&nbsp;&nbsp;Distribute power via load balancing</h1>
            <h1><BsCheckCircleFill/>&nbsp;&nbsp;Total height of 1.75 metres</h1>
            <h1><BsCheckCircleFill/>&nbsp;&nbsp;Upgradable 30 kW power modules (up to 250 kW)</h1>
            <p>Terms & Conditions Apply for Product & Services.</p>
          </div>
        </div>
      </section>
      {/* </Fade>
      <Fade big> */}
      <section>
        <div className='rng-div'>
          <h1>Charging.</h1>
          <hr/>
          <h2>Use our EV range calculator to estimate how far you can go with your vehicle. You can calculate the range left based on the actual state of charge or you can also calculate the distance you’ll be able to drive after charging your car to a certain battery level.</h2>
          <div className='rng-con-div'>
            <div className='rng-ul-div'>
              <input id="input" type={'range'} min={0} defaultValue='0' max={4} step={1}></input>
              <ul>
                <li>90kW</li>
                <li>150kW</li>
                <li>180kW</li>
                <li>210kW</li>
                <li>250kW</li>
              </ul>
            </div>
            <div>
              <h3><span>30</span>mins<br/>TIME</h3>
              <h4><span  id='output'>80</span>Km<br/>DISTANCE</h4>
            </div>
          </div>
          <h5>CERTIFIED</h5>
          <p>T&C apply.</p>
          <hr/>
        </div>
      </section>
      {/* </Fade>
      <Fade big> */}
      <section>
        <div className='con-man-div'>
            <h1>Be an entreprenure.</h1>
          </div>
        <div className='main-hst-chr-div'>
          <div className='hst-div-cst'>
            <h1>Upgrade your<br/>
            {/* <Fade bottom> */}
                <span>commercial spaces</span>
                {/* </Fade> */}
                <br/> with our Rapid DC Charging Network.</h1>
          </div>
          <div className='hst-div-main'>
            <h1>Host a Charger</h1>
            <p>Interested? Write to us at<br/> office@maninc.co</p>
          </div>
        </div>
      </section>
      {/* </Fade>
      <Fade big> */}
      <section className='chse-div'>
          <div className='con-man-div'>
            <h1>Choose your way.</h1>
          </div>
          <div className='hme-cre-div'>
            <div className='new-flex'>
              <h1>Partnerships and Collaborations</h1>
              <Link to="/contact"><h3>Let's Talk<BsArrowUpRight/></h3></Link>
            </div>
        </div>
        <div className='hme-cre-div'>
          <div>
            <h1>Work with MAN.</h1>
            <p>When you work here, you get that our values are more than just words on paper. You’re joining a place where diversity, equity, and inclusion are at the heart of our business practices and culture.</p>
            <Link to={'/careers'}><h2>Careers<HiOutlineArrowNarrowRight/></h2></Link>
          </div>
        </div>
      </section>
      {/* </Fade> */}
      <section>
        <div className='sty-div-min'>
          <h1>Stay in the Loop!</h1>
        </div>
      </section>
      {/* <MainFooter/> */}
      <FooterSection/>
    </div>
  );
}

export default Home;

function handleChange(){

var input = document.getElementById('input');
var output = document.getElementById('output');

  input.oninput = function(e){
    if(input.value === '0'){
      output.innerHTML = '80';
      return 0;
    }
    else if(input.value === '1'){
      output.innerHTML = '140';
      return 0;
    }else if(input.value === '2'){
      output.innerHTML = '170';
      return 0;
    }else if(input.value === '3'){
      output.innerHTML = '190';
      return 0;
    }else if(input.value === '4'){
      output.innerHTML = '220';
      return 0;
    }
  };

}
window.onload = handleChange;

