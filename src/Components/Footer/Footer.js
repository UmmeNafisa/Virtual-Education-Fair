import React from 'react';
import './Footer.css'
//get import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="footer-body py-3 text-center">
            <h5 className='text-white'>Contact Us</h5>
            <a href="/facbook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="/twiter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="/linkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <p className=" text-white">Copyright © 2021 Virtual-Education-fair.com</p>
        </div>
    );
};

export default Footer;