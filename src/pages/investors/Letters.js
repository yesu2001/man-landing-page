import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import './Investors.css';

function Letters() {
  document.title = 'Letters - MAN.';
  
  React.useEffect(() => {
    window.scrollTo(0,0);
  },[])

  return (
      <div>
        <Navbar/>
          <div className='letter_section'>
            <h3 className='section_title'>To our Fellow Shareholder</h3>
            <p>
            In 2022, as the Covid-19 pandemic persisted throughout the year, macro uncertainties. In addition, we faced challenges in setting up our business environment.</p><p>
            Despite these challenges, the Company persevered and are all set to move onto our next new beginning;</p><p> we are to the collective commitment of our team. We also achieved significant milestones in the planning for the EV Infrastructure in the USA.
            We extend our deepest gratitude, as we could not have done this without your support.
            </p>
          </div>
          <div className='letter_section'>
            <h3 className='section_title'>Continued commitment to strengthen management,</h3>
            <p>
              MAN recognizes sustainability management as a fundamental value and core aspect of our business, and we are devoted to fulfilling our social responsibilities as a global corporate citizen.</p>
             <p> we are continually working to minimize impacts of our products on the environment, including by incorporating recycled materials in all of our products by 2025.</p>
              <p>Second, we are expanding support programs to enhance the competitiveness of our suppliers in order to address prolonged supply chain issues; and we are also taking measure to improve working conditions throughout our supply chain.</p>
              <p>Finally, we added sustainability management as a performance metric in evaluations of business units and executives; we initiated mandatory training on sustainability management for all employees; and we reorganized and renamed the Governance Committee to the Sustainability Committee to strengthen the roles and responsibilities of the Board.
            </p>
          </div>
          <div className='letter_section com_bag'>
            <h3 className='section_title'>Dear shareholders,</h3>
            <p>
            The external environment of the Company is undergoing an extremely rapid and complex transformation, as the effects of the pandemic combine with changes in customers, technologies, and markets.</p>

            <p>We encourage you to represent your votes through online voting system.</p>

            <p>We wish health and happiness for you and your family.</p>

            <p>Thank you for your continued support.</p>
          </div>
          <div className="ceo_sign">
            <i>Joe Antony</i>
            <span>CEO</span>
            <span>MAN,Inc.</span>
          </div>
          <FooterSection/>
      </div>
  )
}

export default Letters