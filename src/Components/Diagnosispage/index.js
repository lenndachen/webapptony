import React from 'react'
import logo from '../../Assets/logos/logo.PNG'


const Diagnosis = () => (
    <div className="wholeform">
    <form>
       <div className="header">
        <h4 className="title-testdiagnosis">Mental Illness Diagnosis</h4>
        <img className="logo-testdiagnosis" src={logo} alt="tonylogo" />
       </div>
        <label className = "Name">
            <p className="privacyclause">**Providing your full name will help us manage 
                <br /> our files and have an organizing list of people that have taken the test.Your information is
                <br /> kept confidential and NONE of it is sold to separate parties.** 
            </p>
        </label>
        <div className="together"><div className="wordname">Name</div> <input className="textname" type="text" name="name" /> </div>
        
        
    </form>
    </div>
);

export default Diagnosis;