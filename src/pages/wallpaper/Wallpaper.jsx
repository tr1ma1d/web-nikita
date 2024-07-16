import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer'; 

const Wallpaper = () => {
    return (
        <div>
            <Header />
            <div>
                <h1>Wallpaper Page</h1>
                <p>Welcome to the Wallpaper Page!</p>
                <Link to="/">Go back to Home</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Wallpaper; 
