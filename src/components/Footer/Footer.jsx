import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="logo-container">
                    <span className ="text">Nikita</span>
                </div>
                <div className="contact">
                    <ul>
                        <li className = "text">You can follow me on <a href="#" className="social__link"> Telegram </a></li>
                        <li className="text">Business email</li>
                        <li>Email: musatovla3xnikita@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;