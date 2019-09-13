import React from 'react'

const Diagnosis = () => (
    <div>
    <form>
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