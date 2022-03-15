import React from 'react';
import ReactDOM from 'react-dom'; 
import profileImage from '../../src/assets/profile-img.png';
import { ReactComponent as EmailIcon } from '../../src/assets/email.svg';
import { ReactComponent as LinkedInIcon } from '../../src/assets/linkedin.svg';

export default function Info () {
    return (
        <div className='info-wrapper'>
            <img src={profileImage} alt="profile picture" class='profile-img'/>

            <div className='profile-text'>
                <h1>Laura Smith</h1>
                <h2>Frontend Developer</h2>
                <h3>laurasmith.website</h3>
            </div>

            <div className='social-section'> 
                <div className='social social-bar-1'>
                    <EmailIcon />
                    <p>Email</p>
                </div>
                <div className='social social-bar-2'>
                    <LinkedInIcon />
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}