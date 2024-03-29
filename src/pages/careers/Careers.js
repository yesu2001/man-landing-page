import React from 'react'
import './Careers.css';
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import { useNavigate } from "react-router-dom";
import { ImHeart,ImSmile2,ImHome } from "react-icons/im";
// import quit_job from '../../images/quit.jpg'
// import benefits from '../../images/huge holidays.jpg'
// import innovator from '../../images/innovator.jpg'
// import career1 from '../../images/career1.jpg'

function Careers() {
    document.title = 'Careers - MAN.'

    React.useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const navigate = useNavigate();

    const jobs = [
        {
            jobDepartment: 'Engineering',
            jobtitles : [
                {
                    jobName: 'Electrical Engineer',
                    jobLocation: 'Wilmington, DE',
                    jobState: {name:'Electrical Engineer', brief:'We are hiring an electrical engineer to design and implement complex industrial, commercial, and domestic electrical systems. To do well in this role you should be a licensed professional engineer and have extensive experience as an electrical engineer.', respon:'Designing, maintaining, implementing, or improving electrical instruments, Performing a wide range of engineering tasks by operating computer-assisted design or engineering software and equipment, Preparing specifications for purchases of electrical equipment and materials.', skill:'Bachelor degree in electrical engineering degree, Experience in using or a desire to learn the required software, Knowledge of applicable codes related to electronic engineering.'}
                },
                {
                    jobName: 'Industrial Designer',
                    jobLocation: 'Wilmington, DE',
                    jobState: {name:'Industrial Designer', brief:'Do you like following a design project through from beginning to end? Are you an innovative designer who gets excited about creating products that extend the feel and look of a brand? Then you may be just the right fit for our open industrial designer position at Inspire Products. If this sounds like a good fit for you, apply today!', respon:'Create preliminary artistic drawings in the form of illustrations and storyboards of product concepts, present them to clients for feedback and creatively use the feedback to refine product design, Use CAD software to refine designs and create virtual models of products, Utilize computer-aided industrial design (CAID) software to instruct manufacturing equipment how to build the finalized product design and present to manufacturing department, Collaborate with a team of manufacturing professionals and engineers to evaluate product prototypes in order to determine production feasibility and costs.', skill:'An analytical thinker who is energized by solving problems through design,  degree in industrial design, Robust CAD skills, Independent thinker and worker who can easily adapt to a team approach.'}
                },
                {
                    jobName: 'Prototype Mechanical Engineer',
                    jobLocation: 'Wilmington, DE',
                    jobState: {name:'Product Mechanical Engineer', brief:'A prototype engineer is responsible for creating prototypes of new products. These prototypes are used to test the design and functionality of a product before it goes into full production.', respon:'Working with other members of the engineering team to develop and test new product designs, Evaluating new technology and materials to determine their potential applications in existing products or in new products, Creating computer models of designs using engineering software to test different variables and analyze performance, Analyzing customer feedback about existing products or services to help improve future offerings.', skill:'Bachelors degree in engineering, engineering technology or a related field. Some of the coursework that these programs include is engineering design, mathematics, computer-aided design.'}
                },
            ]
        },
        {
            jobDepartment: 'Operations',
            jobtitles : [
                {
                    jobName: 'Accountant',
                    jobLocation: 'Wilmington, DE',
                    jobState: {name:'Accountant', brief:'We are looking for an Accountant to manage all financial transactions, from fixed payments and variable expenses to bank deposits and budgets.', respon:'Manage all accounting transactions, Prepare budget forecasts, Publish financial statements in time, Handle monthly, quarterly and annual closings, Ensure timely bank payments, Compute taxes and prepare tax returns, Manage balance sheets and profit/loss statements, Audit financial transactions and documents, Comply with financial policies and regulations.', skill:'Work experience as an Accountant, Advanced MS Excel skills including Vlookups and pivot tables, Experience with general ledger functions, Strong attention to detail and good analytical skills, BSc in Accounting, Finance or relevant degree.'}
                },
                {
                    jobName: 'Product Devlopment Manager',
                    jobLocation: 'Wilmington, DE',
                    jobState: {name:'Product Developement Manager', brief:'A PDM’s main role is to assess the viability of new products and, once in development, ensure that they continue to solve customer problems. To do this, a PDM will carry out market research, liaise directly with customers, closely monitor industry trends, and manage the technical development of the product.', respon:'Creates a prototype of a new product in order to iron out flaws in the final design, Determines the process for creating a new item, Oversees product development amongst a team of individuals, Presents new ideas to corporate executives in order to gain permission to develop product lines, Ensures that every phase of a particular project proceeds as scheduled.', skill:'Has good problem solving abilities, Stays current with the latest trends in merchandise, Keeps up to date with changes in the market and technology that would affect new product development, Is able to meet deadlines.'}
                },
            ]
        }

    ]

    const toComponent = (state) => {
        navigate('/careers/application', {
            state: state
        })
    }

    // const toComponentEE=()=>{
    //     navigate('/careers/application',{state:{name:'Electrical Engineer', brief:'We are hiring an electrical engineer to design and implement complex industrial, commercial, and domestic electrical systems. To do well in this role you should be a licensed professional engineer and have extensive experience as an electrical engineer.', respon:'Designing, maintaining, implementing, or improving electrical instruments, Performing a wide range of engineering tasks by operating computer-assisted design or engineering software and equipment, Preparing specifications for purchases of electrical equipment and materials.', skill:'Bachelor degree in electrical engineering degree, Experience in using or a desire to learn the required software, Knowledge of applicable codes related to electronic engineering.'}});
    // }
    // const toComponentAC=()=>{
    //     navigate('/careers/application',{state:{name:'Accountant', brief:'We are looking for an Accountant to manage all financial transactions, from fixed payments and variable expenses to bank deposits and budgets.', respon:'Manage all accounting transactions, Prepare budget forecasts, Publish financial statements in time, Handle monthly, quarterly and annual closings, Ensure timely bank payments, Compute taxes and prepare tax returns, Manage balance sheets and profit/loss statements, Audit financial transactions and documents, Comply with financial policies and regulations.', skill:'Work experience as an Accountant, Advanced MS Excel skills including Vlookups and pivot tables, Experience with general ledger functions, Strong attention to detail and good analytical skills, BSc in Accounting, Finance or relevant degree.'}});
    // }
    // const toComponentID=()=>{
    //     navigate('/careers/application',{state:{name:'Industrial Designer', brief:'Do you like following a design project through from beginning to end? Are you an innovative designer who gets excited about creating products that extend the feel and look of a brand? Then you may be just the right fit for our open industrial designer position at Inspire Products. If this sounds like a good fit for you, apply today!', respon:'Create preliminary artistic drawings in the form of illustrations and storyboards of product concepts, present them to clients for feedback and creatively use the feedback to refine product design, Use CAD software to refine designs and create virtual models of products, Utilize computer-aided industrial design (CAID) software to instruct manufacturing equipment how to build the finalized product design and present to manufacturing department, Collaborate with a team of manufacturing professionals and engineers to evaluate product prototypes in order to determine production feasibility and costs.', skill:'An analytical thinker who is energized by solving problems through design,  degree in industrial design, Robust CAD skills, Independent thinker and worker who can easily adapt to a team approach.'}});
    // }
    // const toComponentPME=()=>{
    //     navigate('/careers/application',{state:{name:'Product Mechanical Engineer', brief:'A prototype engineer is responsible for creating prototypes of new products. These prototypes are used to test the design and functionality of a product before it goes into full production.', respon:'Working with other members of the engineering team to develop and test new product designs, Evaluating new technology and materials to determine their potential applications in existing products or in new products, Creating computer models of designs using engineering software to test different variables and analyze performance, Analyzing customer feedback about existing products or services to help improve future offerings.', skill:'Bachelors degree in engineering, engineering technology or a related field. Some of the coursework that these programs include is engineering design, mathematics, computer-aided design.'}});
    // }
    // const toComponentPDE=()=>{
    //     navigate('/careers/application',{state:{name:'Product Developement Manager', brief:'A PDM’s main role is to assess the viability of new products and, once in development, ensure that they continue to solve customer problems. To do this, a PDM will carry out market research, liaise directly with customers, closely monitor industry trends, and manage the technical development of the product.', respon:'Creates a prototype of a new product in order to iron out flaws in the final design, Determines the process for creating a new item, Oversees product development amongst a team of individuals, Presents new ideas to corporate executives in order to gain permission to develop product lines, Ensures that every phase of a particular project proceeds as scheduled.', skill:'Has good problem solving abilities, Stays current with the latest trends in merchandise, Keeps up to date with changes in the market and technology that would affect new product development, Is able to meet deadlines.'}});
    // }
    
  return (
    <div className='Careers'>
        <Navbar/>
        <div className='career_section'>
            {/* <div> */}
                <h2 className="section_one_title">Quit<br/> your<br/> Job<br/>  Today</h2>
                <div className='career_section_para'>
                    <p>It doesn’t matter where you come from, where you went to school or what industry you’re in if you’ve done exceptional work.</p>
                    <p>When you work here, you get that our values are more than just words on paper. You’re joining a place where diversity, equity, and inclusion are at the heart of our business practices and culture.</p>
                    <p>And no matter what office you’re in or what discipline, there are a few things that make us all tick. Being open and taking chances.</p>
                </div>
            {/* </div> */}
        </div>
        <div className='benefits_section'>
                <div className='benefits'>
                        <ImSmile2 size={20}/>
                        <h3 className="section_title">Huge Holidays.</h3>
                        <p>We close for a week 3x annually, so we can all rest together and truly enjoy the time off.</p>
                </div>
                <div className='benefits'>
                        <ImHome size={20}/>
                        <h3 className="section_title">Early Fridays.</h3>
                        <p>We log off at 2pm on Fridays all year long.</p>
                </div>
                <div className='benefits'>
                        <ImHeart size={20}/>
                        <h3 className="section_title">Taking care.</h3>
                        <p>We know that wellness is both physical and mental, so we have Take Care days when you need them.</p>
                </div>
        </div>
        <div className='career_section_two'>
            <h2>Be an innovator</h2>
            <div className='career_section_para'>
                <p>Interns tackle hands-on projects and design challenges, constantly upending conventions and pushing boundaries.</p>
                <p>At MAN, interns are an important part of the team. Whether you sign on for a internship during the academic year, you can work on critical projects. As part of the MAN, you’ll get an insider’s perspective on the way we work and the people who lead us.</p>
                <p>Yes, you’ll learn from them, but they expect to learn from you, too.</p>
            </div>
        </div>
        <div className='career_section_three'>
            <p>We're looking for talented individuals ready to get their hands dirty to make a meaningful impact that will last for generations to come. We are an equal opportunity employer offering competitive salaries, comprehensive health benefits, and equity packages.</p>
        </div>
        <div className='jobs_section'>
            {/* <div className='job_department'>
                {
                    jobs.map((job,index) => <p className="job" onClick={() => handletab(job)} key={index}>{job.jobDepartment}</p>)
                }
            </div>
            <div className='job_names'>
                {
                    activeJobs.length ? activeJobs.map((job,index) => (
                        <div key={index} onClick={()=>{toComponentEE()}} className="job">
                            <h3>{job.jobName}</h3>
                            <p className='job_location'>{job.jobLocation}</p>
                        </div>
                    )): null
                }
            </div> */}
           


            { 
                jobs.map((job,index) => <div key={index}>
                    <div className='job_department'>
                        <p>{job.jobDepartment}</p>
                    </div>
                    <div className='job_names'>
                        {
                            job.jobtitles.map((jobSection,index) => <div className="job" onClick={() => toComponent(jobSection.jobState)}>
                                <h3>{jobSection.jobName}</h3>
                                <span>{jobSection.jobLocation}</span>
                            </div>)
                        }
                    </div>
                </div>)
            }
        </div>
        <FooterSection/>
    </div>
  )
}

export default Careers