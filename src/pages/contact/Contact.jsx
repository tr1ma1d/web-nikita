import React, { useState } from "react";
import axios from 'axios';  // Импортируем axios
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/send', formData);
            if (response.status === 200) {
                alert('Email sent successfully');
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div>
            <Header />
            <main>
                <div className="wrapper-contact">
                    <div className="wrapper-author">
                        <div className="author__info">
                            <img src="./images/author.jpg" alt="photo" className="image" />
                            <div className="author-description">
                                <h2 className="author__name">Nikita</h2>
                                <span className="author__description">junior developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
