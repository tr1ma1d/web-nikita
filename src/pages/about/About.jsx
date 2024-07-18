import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useSpring, animated } from 'react-spring';
import GalleryForms from '../../components/UI/GalleryFroms/GalleryForms';
import './About.css';

const About = () => {
    // Состояния для видимости каждого блока
    const [isVisibleTitle, setIsVisibleTitle] = useState(false);
    const [isVisibleGallery, setIsVisibleGallery] = useState(false);
    const [isVisibleLink, setIsVisibleLink] = useState(false);

    // Рефы для элементов, которые будут отслеживаться
    const refTitle = useRef(null);
    const refGallery = useRef(null);
    const refLink = useRef(null);

    // Функция для установки видимости
    const setVisibility = (setVisibilityFn) => (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            console.log(`Element ${entry.target.className} is intersecting`);
            setVisibilityFn(true);
        } else {
            console.log(`Element ${entry.target.className} is not intersecting`);
        }
    };

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };

        const observerTitle = new IntersectionObserver(setVisibility(setIsVisibleTitle), observerOptions);
        const observerGallery = new IntersectionObserver(setVisibility(setIsVisibleGallery), observerOptions);
        const observerLink = new IntersectionObserver(setVisibility(setIsVisibleLink), observerOptions);

        if (refTitle.current) observerTitle.observe(refTitle.current);
        if (refGallery.current) observerGallery.observe(refGallery.current);
        if (refLink.current) observerLink.observe(refLink.current);

        return () => {
            if (refTitle.current) observerTitle.unobserve(refTitle.current);
            if (refGallery.current) observerGallery.unobserve(refGallery.current);
            if (refLink.current) observerLink.unobserve(refLink.current);
        };
    }, []);

    // Анимация для каждого элемента
    const animationTitle = useSpring({
        opacity: isVisibleTitle ? 1 : 0,
        transform: isVisibleTitle ? 'translateY(0)' : 'translateY(-10%)',
    });

    const animationGallery = useSpring({
        opacity: isVisibleGallery ? 1 : 0,
        transform: isVisibleGallery ? 'translateY(0)' : 'translateY(10%)',
    });

    const animationLink = useSpring({
        opacity: isVisibleLink ? 1 : 0,
        transform: isVisibleLink ? 'translateY(0)' : 'translateX(-10%)',
    });

    return (
        <div>
            <Header />
            <main>
                <animated.div
                    ref={refTitle}
                    className="welcome-container"
                    style={{ ...animationTitle,}} // Временный бордер для отладки
                >
                    <div className="welcome_title">
                        <h2 className="welcome__title">
                            Привет, я начинающий инженер-программист и создатель контента, регулярно публикующий материалы о своей повседневной жизни и проектах.
                        </h2>
                    </div>
                </animated.div>
                <animated.div
                    ref={refGallery}
                    className="welcome-container"
                    style={{ ...animationGallery, }} // Временный бордер для отладки
                >
                    <GalleryForms />
                </animated.div>
                <animated.div
                    ref={refLink}
                    className="welcome-container"
                    style={{ ...animationLink, }} // Временный бордер для отладки
                >
                    <div className="link-container">
                        <p className="link-container__text">
                            В последнее время я работал над сторонним проектом обоев.
                        </p>
                        <a href="/wallpaper" className="link">Посмотреть обои →</a>
                    </div>
                </animated.div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
