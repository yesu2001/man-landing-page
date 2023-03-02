import React from 'react';
import './Sustainability.css';
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';

function Sustainability () {
	document.title = 'Sustainability - MAN.';
	React.useEffect(() => {
        window.scrollTo(0,0);
    },[])
	return (
		<div className="sustainability">
			<Navbar/>
			<h1 className="page_title">Sustainability</h1>
			<section  className="sustain_section">
				<h3 className="section_title">The Social Responsibility </h3>
				<p>The concerns and growing awareness among all stakeholders about global warming and climate change debate poses serious challenges. As a responsible member of society, Centre is committed in combating climate change and as a responsible group, we would continue to play a leadership role in Sustainability.</p>
				<p>We are committed to tackling the issues of Climate Change by adopting Sustainable and responsible growth. To achieve this, we have developed a Sustainability Model.</p>
			</section>
			<section className="sustain_section com_bg">
				<h3 className="section_title">2023 Sustainable Solutions</h3>
				<p>The 2023 Advancing Climate Solutions Progress Report outlines our approach to help reduce greenhouse emissions in support of a net-zero future.</p>
			</section>
			<section className="sustain_section">
				<h3 className="section_title">Our Sustainability Goals</h3>
				<p>Sustainability being our core philosophy, MAN leads the way in generation of non-emitting sources. We're aiming to be 50% clean profile by 2030.</p>
				<p>We influences and is influenced by different stakeholder groups across our value chain. Our objective in sustainability is to engage with and address their needs, ensuring we practice leadership with care.</p>
			</section>
			<section className="sustain_section com_bg">
				<h3 className="section_title">UN Sustainability Goals</h3>
				<p>MAN has a primary role to play in the global efforts to achieve the United Nation's Sustainable Development Goals (SDGs).</p>
				<p>We shall align all its interventions to achieve the UN SDG goals and the country level targets. The SDGs provides centre with a lens through which to translate the world's needs and ambitions into business solutions. These solutions will enable us to better manage our risks, anticipate consumer demand, build positions in growth markets, secure access to needed resources, and strengthen our supply chains, while moving towards a sustainable and inclusive development path.</p>
			</section>
			<FooterSection/>
		</div>
	)
}

export default Sustainability;