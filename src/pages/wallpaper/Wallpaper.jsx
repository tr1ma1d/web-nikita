import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/UI/Button/Button';
import { Pagination, Autoplay } from 'swiper/modules';
import './Wallpaper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSpring, animated } from 'react-spring';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Wallpaper = () => {
    const [isVisibleSpace, setIsVisibleSpace] = useState(false);
    const [isVisibleWave, setIsVisibleWave] = useState(false);
    const [isVisibleMountain, setIsVisibleMountain] = useState(false);

    const refSpace = useRef(null);
    const refWave = useRef(null);
    const refMountain = useRef(null);

    const setVisibility = (setVisibilityFn) => (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setVisibilityFn(true);
        } 
    };

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };

        const observerSpace = new IntersectionObserver(setVisibility(setIsVisibleSpace), observerOptions);
        const observerWave = new IntersectionObserver(setVisibility(setIsVisibleWave), observerOptions);
        const observerMountain = new IntersectionObserver(setVisibility(setIsVisibleMountain), observerOptions);

        if (refSpace.current) observerSpace.observe(refSpace.current);
        if (refWave.current) observerWave.observe(refWave.current);
        if (refMountain.current) observerMountain.observe(refMountain.current);

        return () => {
            if (refSpace.current) observerSpace.unobserve(refSpace.current);
            if (refWave.current) observerWave.unobserve(refWave.current);
            if (refMountain.current) observerMountain.unobserve(refMountain.current);
        };
    }, []);

    const animationSpace = useSpring({
        opacity: isVisibleSpace ? 1 : 0,
        transform: isVisibleSpace ? 'translateX(0)' : 'translateX(-10%)',
    });

    const animationWave = useSpring({
        opacity: isVisibleWave ? 1 : 0,
        transform: isVisibleWave ? 'translateX(0)' : 'translateX(10%)',
    });

    const animationMountain = useSpring({
        opacity: isVisibleMountain ? 1 : 0,
        transform: isVisibleMountain ? 'translateX(0)' : 'translateX(20%)',
    });

    return (
        <div>
            <Header />
            <main>
                <div className="swiper-container">
                    <Swiper
                        className="swiper"
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                    >
                        <SwiperSlide className="swiper-slide" style={{ backgroundImage: "url('./images/B.png')" }}>
                            <div className="description">
                                <h2 className="title">Space</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" style={{ backgroundImage: "url('./images/mountain.jpg')" }}>
                            <div className="description">
                                <h2 className="title">Wave</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" style={{ backgroundImage: "url('./images/Ocean Blue.jpg')" }}>
                            <div className="description">
                                <h2 className="title">Mountains</h2>
                            </div>
                        </SwiperSlide>
                        <div className="custom-pagination"></div>
                    </Swiper>
                </div>

                <div className="list-container">
                    <animated.div
                        ref={refSpace}
                        className="wallpaper-container"
                        style={animationSpace}
                    >
                        <figure className="image-container">
                            <img src="./images/B.png" alt="wallpaper-1" />
                        </figure>
                        <div className="wallpaper_description">
                            <h2 className="title_description">Space</h2>
                            <p className="text_description">
                                Fourth wallpaper pack is a variation on
                                the popular topological wallpapers!
                                Two slightly different designs in multiple
                                colors and crisp 5k resolution!
                            </p>
                            <Button>Усатновить</Button>
                        </div>
                    </animated.div>
                    <animated.div
                        ref={refWave}
                        className="wallpaper-container"
                        style={animationWave}
                    >
                        <div className="wallpaper_description">
                            <h2 className="title_description">Wave</h2>
                            <p className="text_description">
                                Third wallpaper pack coming in strong!
                                Same wavy design, multiple colors in crisp 5k resolution!
                            </p>
                            <Button>Усатновить</Button>
                        </div>
                        <figure className="image-container">
                            <img src="./images/Ocean Blue.jpg" alt="wallpaper-1" />
                        </figure>
                    </animated.div>
                    <animated.div
                        ref={refMountain}
                        className="wallpaper-container"
                        style={animationMountain}
                    >
                        <figure className="image-container">
                            <img src="./images/mountain.jpg" alt="wallpaper-1" />
                        </figure>
                        <div className="wallpaper_description">
                            <h2 className="title_description">Mountains</h2>
                            <p className="text_description">
                                A majestic mountain range,
                                offering a panoramic view of towering peaks and rugged terrain,
                                evoking a sense of adventure and tranquility.
                            </p>
                            <Button>Усатновить</Button>
                        </div>
                    </animated.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Wallpaper;
