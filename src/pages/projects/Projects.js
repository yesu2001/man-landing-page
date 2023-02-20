import React from 'react'
import Layout from '../../components/layout/Layout'
import {Link} from 'react-router-dom';

function Projects() {
  return (
    <Layout>
      <div className="Projects">
        <h1>Our Projects</h1>
        <div className="section_one">
          <p>
            We’re committed to improving quality of life by meeting the critical needs of society. As the world evolves, so do we, constantly working to meet the changing needs of our customers and stakeholders.
          </p>
          <b>Mounesh Kumar</b>
          <span>President, MAN</span>
        </div>
        <div className="section_two">
          <div className="section_two_left">
            <h2>Building the electric-vehicle charging infrastructure America needs</h2>
            <p>The United States needs many more EV-charging stations—and federal funds for them are coming.</p>
            <b>
              Status: <br/>
              Phase 1: COmplete. <br/>
              Phase 2: Currently working with various local governments to consult, advise, and perform research, development, and testing on the viability in their cities.
            </b>
            <Link to='/projects/ourprojects' className="btn">Learn more</Link>
          </div>
          <div className="section_two_right">
            <img src="" alt=""/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects