import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import './Investors.css';

function Letters() {
  return (
      <div className="Letters">
          <h2>Shareholder's Letter</h2>
          <section>
            <h1>To our Fellow Shareholder</h1>
            <p>
            In 2022, as the Covid-19 pandemic persisted throughout the year, macro uncertainties. In addition, we faced challenges in setting up our business environment.<br/>
            Despite these challenges, the Company persevered and are all set to move onto our next new beginning; we are to the collective commitment of our team. We also achieved significant milestones in the planning for the EV Infrastructure in the USA.<br/>
            We extend our deepest gratitude, as we could not have done this without your support.<br/>
            </p>
          </section>
          <section>
            <h1>Continued commitment to strengthen management,</h1>
            <p>
              MAN recognizes sustainability management as a fundamental value and core aspect of our business, and we are devoted to fulfilling our social responsibilities as a global corporate citizen.<br/>
              we are continually working to minimize impacts of our products on the environment, including by incorporating recycled materials in all of our products by 2025.<br/>
              Second, we are expanding support programs to enhance the competitiveness of our suppliers in order to address prolonged supply chain issues; and we are also taking measure to improve working conditions throughout our supply chain.<br/>
              Finally, we added sustainability management as a performance metric in evaluations of business units and executives; we initiated mandatory training on sustainability management for all employees; and we reorganized and renamed the Governance Committee to the Sustainability Committee to strengthen the roles and responsibilities of the Board.<br/>
            </p>
          </section>
          <section>
            <h1>Dear shareholders,</h1>
            <p>
            The external environment of the Company is undergoing an extremely rapid and complex transformation, as the effects of the pandemic combine with changes in customers, technologies, and markets.<br/>

            We encourage you to represent your votes through online voting system.<br/>

            We wish health and happiness for you and your family.<br/>

            Thank you for your continued support.
           </p>
          </section>
          <hr/>
          <div className="ceo_sign">
            <i>Joe Antony</i>
            <span>CEO, MAN,Inc.</span>
          </div>
      </div>
  )
}

export default Letters