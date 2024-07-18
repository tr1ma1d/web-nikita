import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GalleryForms from '../../components/UI/GalleryFroms/GalleryForms';
import './About.css';

const About = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="welcome-container">
                    <div className="welcome_title">
                        <h2 className="welcome__title">
                            Hi, I’m a beginer software engineer and a content creator
                            posting regularly about my daily life and projects.
                        </h2>
                    </div>
                    <GalleryForms />
                    <div className="link-container">
                        <p className="link-container__text">
                            Recently, I have been working on a side wallpaper project.
                        </p>
                        <a href="/wallpaper" className="link">View Wallpaper →</a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;