import React from "react";
import Styles from './Footer.css'
import LogoFacebook from '../assets/img/iconFacebook.svg';
import LogoInstagram from '../assets/img/iconInstagram.svg';
import LogoLinkedin  from '../assets/img/iconLinkedin.svg';
import LogoTweet from '../assets/img/tweet.svg';


const Footer = () => {
    return (

        <div className="icons-final">
        <div className="derechos">
            <p>©2021 Digital Booking</p>
        </div>
        <div className="icons">
            <img className="LogoFacebook" src= {LogoFacebook}  alt= 'Facebook'></img>
            <img className="LogoInstagram" src= {LogoInstagram} alt= 'Instagram'></img>
            <img className="LogoLinkedin" src= {LogoLinkedin}  alt= 'Linkedin'></img>
            <img className="LogoTweet" src= {LogoTweet}        alt= 'Tweeter'></img>
        </div>

        </div>

    )
}


export default Footer;