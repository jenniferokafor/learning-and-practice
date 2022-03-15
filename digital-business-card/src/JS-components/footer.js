import React from 'react';
import ReactDOM from 'react-dom'; 
import {ReactComponent as Twitter} from '../../src/assets/Twitter-icon.svg';
import {ReactComponent as Facebook} from '../../src/assets/Facebook-icon.svg';
import {ReactComponent as Instagram} from '../../src/assets/Instagram-icon.svg';
import {ReactComponent as Github} from '../../src/assets/GitHub-icon.svg';

export default function Footer () {
    return (
        <div className='footer-wrapper'>
            <div className='icons'>
                <Twitter />
                <Facebook />
                <Instagram />
                <Github />
            </div>
        </div>
    )
}