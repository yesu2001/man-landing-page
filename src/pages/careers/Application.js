import './Application.css';

import {useLocation} from 'react-router-dom';

export default function Application(){

    const location = useLocation();


    return(
        <div className='application'>
            <section className='one-sec-div-main one-img-cvr-div'>
                <div className='one-sec-div-main-wrap'>
                    <div className='pro-tit-div-wrap'>
                        <h1>APPLICATION [{location.state.name}]</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='brief-div-wrp'>
                    <div>
                        <h1>Job Brief</h1>
                        <p>{location.state.brief}</p>
                    </div>
                    <div>
                        <h1>Responsibilities</h1>
                        <p>{location.state.respon}</p>
                    </div>
                    <div>
                        <h1>Requirements and skills</h1>
                        <p>{location.state.skill}</p>
                    </div>
                </div>
                <div className='e-form-div'>
                <form method='POST' action='sendmail.php' enctype="multipart/form-data">
                        <div className='list-p-info-div'>
                            <h2>Step 1 of 3</h2>
                            <h1>Personal Information.</h1>
                            <div className='list-p-inf-wrap'>
                                <div>
                                    <label>First Name</label>
                                    <input name='fname' id='fname'></input>
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input name='lname' id='lname'></input>
                                </div>
                            </div>
                            <div className='list-p-inf-wrap'>
                                <div>
                                    <label>Middle Name (Optional)</label>
                                    <input></input>
                                </div>
                                <div>
                                    <label>Preferred Name (Optional)</label>
                                    <input></input>
                                </div>
                            </div>
                            <div className='list-p-inf-wrap'>
                                <div>
                                    <label>Email</label>
                                    <input name='email' id='email'></input>
                                </div>
                                <div>
                                    <label>Country of Residence</label>
                                    <input name='coty' id='coty'></input>
                                </div>
                            </div>
                            <div className='list-res'>
                                <label>Resume <span>(PDF, Doc, TXT)</span></label>
                                <input type={'file'} name='file' id='file'></input>
                            </div>
                        </div>
                        <div className='list-p-info-div'>
                            <h2>Step 2 of 3</h2>
                            <h1>Legal Acknowledgment.</h1>
                            <p>1. I certify that all statements I have made on this application and on my resume or any other supplementary materials are true and correct. I acknowledge that any false statement or misrepresentation on this application, my resume, or supplementary materials will be cause for refusal to hire, or for immediate termination of employment at any time during the period of my employment.</p>
                            <p>2. I understand and agree that, if I am offered a position, it will be offered on condition that my employment will be at will and for no definite period, and that my employment may be terminated, at any time, with or without cause and with or without prior notice.</p>
                            <p>3. I understand that no supervisor or manager may alter or amend the above conditions except in writing, signed by a company officer.</p>
                            <div className='wrap-list-ack'>
                                <label>Are you a former/current intern?</label>
                                <div>
                                    <p><input type={'radio'} name="choice-radio"/>Yes</p>
                                    <p><input type={'radio'} name="choice-radio"/>No</p>
                                </div>
                                <label>Are you a current university student?</label>
                                <div>
                                    <p><input type={'radio'} name="choice-radio2"/>Yes</p>
                                    <p><input type={'radio'} name="choice-radio2"/>No</p>
                                </div>
                                <label>I authorize to consider me for other job opportunities.</label>
                                <div>
                                    <p><input type={'radio'} name="choice-radio3"/>Yes</p>
                                    <p><input type={'radio'} name="choice-radio3"/>No</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='dis-div-wrap'>
                            <hr/>
                            <h2>Step 3 of 3</h2>
                            <h1>Opportunities Disclosure.</h1>
                            <p>MAN is an Equal Opportunity / Affirmative Action employer committed to diversity in the workplace. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, age, national origin, disability, protected veteran status, gender identity or any other factor protected by applicable federal, state or local laws.</p>
                            <p>MAN is committed to working with and providing reasonable accommodations to individuals with disabilities. </p>
                            <div className='disc-div-sel'>
                                <div>
                                    <label>Gender</label>
                                    <select name='gend' id='gend'>
                                        <option value="nil">- Select an option -</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="not-disclose">I choose not disclose</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Disability</label>
                                    <select name='disy' id='disy'>
                                        <option value="nil">- Select an option -</option>
                                        <option value="yes">Yes, I have disability</option>
                                        <option value="no">No, I don't have disability</option>
                                        <option value="not-disclose">I choose not disclose</option>
                                    </select>
                                </div>
                            </div>
                            <div className='dis-chk-bx'>
                                <p><input type={'checkbox'}/>I have read and understand the statements above and accept them as conditions of employment.</p>
                                <p><input type={'checkbox'}/>I acknowledge that I have read and understood Equal Opportunities.</p>
                            </div>
                            <button type='submit'>Submit</button>
                        </div>
                        </form>
                </div>
            </section>
        </div>
    );
}