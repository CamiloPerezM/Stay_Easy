import React from "react";
import '../Styles/Footer.css'
import LogoFacebook from '../assets/img/iconFacebook.svg';
import LogoInstagram from '../assets/img/iconInstagram.svg';
import LogoLinkedin from '../assets/img/iconLinkedin.svg';
import LogoTweet from '../assets/img/tweet.svg';


const Footer = () => {
    return (

        <div className="icons-final footerFijo">
            <div className="derechos">
                <span>©2023 Digital Booking</span>
            </div>
            <div className="icons">
                <img className="Logos" src={LogoFacebook} alt='Facebook'></img>
                <img className="Logos" src={LogoInstagram} alt='Instagram'></img>
                <img className="Logos" src={LogoLinkedin} alt='Linkedin'></img>
                <img className="Logos" src={LogoTweet} alt='Tweeter'></img>
            </div>

        </div>

    )
}


export default Footer;