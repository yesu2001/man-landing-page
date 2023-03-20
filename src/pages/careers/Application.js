import './Application.css';
import React from 'react';
import {useLocation} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import FileBase from 'react-file-base64';
import axios from 'axios';


export default function Application(){

    const [formData,setFormData] = React.useState({
        firstName: '',
        lastName: '',
        middleName: '',
        preferedName: '',
        email: '',
        country:'',
        resume: '',
        isIntern: '',
        isStudent: '',
        otherJobs: '',
        gender: '',
        disability: '',
    })

    const location = useLocation();
    document.title = 'Application - MAN.';
    
    React.useEffect(() => {
        window.scrollTo(0,0);
    },[]) 

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        // fetch(baseURL)

        axios.post('http://localhost:8000/applications', formData).then((response) => {
            console.log(response.data)
        })
        setFormData({
            firstName: '',
            lastName: '',
            middleName: '',
            preferedName: '',
            email: '',
            country:'',
            resume: '',
            isIntern: '',
            isStudent: '',
            otherJobs: '',
            gender: '',
            disability: '',
        })
    }

    return(
        <div>
            <Navbar/>
            <div>
                <h1 className='page_title'>Application  -  <span>{location.state.name}</span></h1>
                <div className='application_section'>
                    <div>
                        <h3 className='section_title'>Job Brief</h3>
                        <p>{location.state.brief}</p>
                    </div>
                    <div>
                        <h3 className='section_title'>Responsibilities</h3>
                        <p>{location.state.respon}</p>
                    </div>
                    <div>
                        <h3 className='section_title'>Requirements and skills</h3>
                        <p>{location.state.skill}</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='e-form-div'>
            <form method='POST' action='sendmail.php' enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <div className='list-p-info-div'>
                        <h2>Step 1 of 3</h2>
                        <h1>Personal Information.</h1>
                        <div className='list-p-inf-wrap'>
                            <div>
                                <label>First Name</label>
                                <input required name='firstName' value={formData.firstName} onChange={handleChange} id='fname'></input>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input required name='lastName' value={formData.lastName} onChange={handleChange} id='lname'></input>
                            </div>
                        </div>
                        <div className='list-p-inf-wrap'>
                            <div>
                                <label>Middle Name (Optional)</label>
                                <input name="middleName" value={formData.middleName} onChange={handleChange}></input>
                            </div>
                            <div>
                                <label>Preferred Name (Optional)</label>
                                <input name="preferedName" value={formData.preferedName} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className='list-p-inf-wrap'>
                            <div>
                                <label>Email</label>
                                <input required name='email' value={formData.email} onChange={handleChange} id='email'></input>
                            </div>
                            <div>
                                <label>Country of Residence</label>
                                <input required name='country' value={formData.country} onChange={handleChange} id='coty'></input>
                            </div>
                        </div>
                        <div className='list-res'>
                            <label>Resume <span>(PDF, Doc, TXT)</span></label>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, resume: base64 })} />
                            {/* <input type={'file'} name='resume' id='file' onChange={handleFileChange}></input> */}
                        </div>
                    </div>
                    <hr/>
                    <div className='dis-div-wrap'>
                        <h2>Step 2 of 3</h2>
                        <h1>Legal Acknowledgment.</h1>
                        <p>1. I certify that all statements I have made on this application and on my resume or any other supplementary materials are true and correct. I acknowledge that any false statement or misrepresentation on this application, my resume, or supplementary materials will be cause for refusal to hire, or for immediate termination of employment at any time during the period of my employment.</p>
                        <p>2. I understand and agree that, if I am offered a position, it will be offered on condition that my employment will be at will and for no definite period, and that my employment may be terminated, at any time, with or without cause and with or without prior notice.</p>
                        <p>3. I understand that no supervisor or manager may alter or amend the above conditions except in writing, signed by a company officer.</p>
                        <div className='wrap-list-ack'>
                            <label>Are you a former/current intern?</label>
                            <div> 
                                <p><input type={'radio'} name="isIntern" value='yes' checked={formData.isIntern === 'yes'} onChange={handleChange}/>Yes</p>
                                <p><input type={'radio'} name="isIntern" value='no' checked={formData.isIntern === 'no'} onChange={handleChange}/>No</p>
                            </div>
                            <label>Are you a current university student?</label>
                            <div>
                                <p><input type={'radio'} name="isStudent" value='yesu' checked={formData.isStudent === 'yes'} onChange={handleChange}/>Yes</p>
                                <p><input type={'radio'} name="isStudent" value='no' checked={formData.isStudent === 'no'} onChange={handleChange}/>No</p>
                            </div>
                            <label>I authorize to consider me for other job opportunities.</label>
                            <div>
                                <p><input type={'radio'} name="otherJobs" value='yes' checked={formData.otherJobs === 'yes'} onChange={handleChange}/>Yes</p>
                                <p><input type={'radio'} name="otherJobs" value='no' checked={formData.otherJobs === 'no'} onChange={handleChange}/>No</p>
                            </div>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className='list-p-info-div'>
                        <h2>Step 3 of 3</h2>
                        <h1>Opportunities Disclosure.</h1>
                        <p>MAN is an Equal Opportunity / Affirmative Action employer committed to diversity in the workplace. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, age, national origin, disability, protected veteran status, gender identity or any other factor protected by applicable federal, state or local laws.</p>
                        <p>MAN is committed to working with and providing reasonable accommodations to individuals with disabilities. </p>
                        <div className='disc-div-sel'>
                            <div>
                                <label>Gender</label>
                                <select name='gender' id='gend' value={formData.gender} onChange={handleChange}>
                                    <option value="nil">- Select an option -</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="not-disclose">I choose not disclose</option>
                                </select>
                            </div>
                            <div>
                                <label>Disability</label>
                                <select name='disability' id='disy' value={formData.disability} onChange={handleChange}>
                                    <option value="nil">- Select an option -</option>
                                    <option value="yes">Yes, I have disability</option>
                                    <option value="no">No, I don't have disability</option>
                                    <option value="not-disclose">I choose not disclose</option>
                                </select>
                            </div>
                        </div>
                        <div className='check_box'>
                            <p>
                                <input type='checkbox'/>I have read and understand the statements above and accept them as conditions of employment.
                            </p>
                            <p>
                            <input type='checkbox'/>I acknowledge that I have read and understood Equal Opportunities.
                            </p>
                        </div>
                        <button type='submit'>Submit</button>
                    </div>
                    </form>
            </div>
            <FooterSection/>
        </div>
    );
}




