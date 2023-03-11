import React from 'react';
import './Management.css';
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import { ImTwitter, ImLinkedin} from "react-icons/im";
import { Link } from 'react-router-dom';

function Management() {
	document.title = 'Management- MAN.';
	React.useEffect(() => {
        window.scrollTo(0,0);
    },[])
	return (
		<React.Fragment>
		<h1>Team</h1>

		<div className="management">
			{/* <p>We do everything with our core values of hardwork and trust.</p> */}
			<div className="management_section">
				<div>
					<div>
						<h2>Mounesh Kumar</h2>
						<div className="social_icons">
							<Link to="" className='icon'><ImTwitter size={20}/></Link>
							<Link to="" className='icon'><ImLinkedin size={20}/></Link>
						</div>
					</div>
					<span>President and Co-Founder</span>
				</div>
				<p>
					Mounesh Kumar is the President of MAN and serves on its board of directors.
					Prior to starting MAN, MK was the product designer for currently ongoing project Energy’s products.
					MK is responsible for all of the company’s Operations, including end-to-end management of MAN’s activities, and service and support in all markets. He also headed MAN’s project Energy division and played a key role in the continued development of product. Then his role is on continued development of strategic reseller and supplier relationships, ensuring flexibility in response to an increasingly demanding marketplace.
					MK earned a Bachelor of Technology degree from Indian Institute of Technology Madras.
				</p>
			</div>
			<div className="management_section">
				<div>
					<div>
						<h2>Antony S</h2>
						<div className="social_icons">
							<Link to="" className='icon'><ImTwitter size={20}/></Link>
							<Link to="" className='icon'><ImLinkedin size={20}/></Link>
						</div>
					</div>
					<span>CEO and Co-Founder</span>
				</div>
				<p>
					Antony SundaraBose (Joe) is MAN’s CEO. Joe oversees the development of UI & software for the product. He is responsible for delivering the software for MAN’s innovative products, including the user interface, applications and frameworks.
					Prior to his return, Joe worked at Appstone, where he held several roles including team management.
					He took on responsibility for product software as well, delivering all subsequent releases of the advanced UI systems for customers.
					Joe holds a Bachelor's in Computer Application from the University of Bangalore, Karnataka, India.
				</p>
			</div>
		</div>
		</React.Fragment>
	)
}

export default Management;