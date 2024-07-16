import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const Contact = () => {
    return (
        <div>
            <Header />
            <div>
                <h2>Contact Us</h2>
                <p>This is a simple React component for a Contact page.</p>
                <Link to="/">Go back to About</Link>
            </div>
            <Footer />
        </div>
    );
}
export default Contact;