import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <header className='top'>
            <div className="logotype">
                <span className="logotype__text">
                    <a href='/'>Nikita</a>
                </span>
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="/" className='menu__link'>Home</a></li>
                    <li><a href="/wallpaper" className='menu__link'>Wallpaper</a></li>
                    <li><a href="/contact" className='menu__link'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;