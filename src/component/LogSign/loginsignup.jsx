import React, { useState } from 'react'; // Import useState from React

import './loginsignup.css';

import user_icon from '../assert/icons8-person-40.png'
import email_icon from '../assert/icons8-email-100.png'
import password_icon from '../assert/icons8-password-40.png'

// Declare Function Component
const Loginsignup = () => {
    //start from Sign Up
    const [action, setAction] = useState('Sign Up');
    return (
        <div className='container'>
            <div className='header'>
                {/* action changes to sign up and login */}
                <div className='text'>{action}</div>
                <div className='underlign'></div>
                <div className='inputs'>
                    {/* appears only in sign up */}
                    {action==='Login'?<div></div>:<div className='input'>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name'/>
                    </div>}
                    
                    <div className='input'>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id'/>
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password'/>
                    </div>
                </div>
            </div>
            {/* appearn only in the login */}
            {action==='Sign Up'?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here</span></div> }
            
            <div className='submit-container'>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"}onClick={()=>{setAction('Login')}}>Login</div>
            </div>
        </div>
    );
};

export default Loginsignup;
