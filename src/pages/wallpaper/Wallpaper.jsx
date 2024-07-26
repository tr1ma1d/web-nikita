import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/UI/Button/Button';
import ScrollButton from '../../components/UI/ScrollButton/ScrollButton';
import { Pagination, Autoplay } from 'swiper/modules';
import './Wallpaper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSpring, animated } from 'react-spring';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AnimatedSection = ({ refElement, hasBeenVisible, image, title, description, downloadUrl }) => {
    const animation = useSpring({
        opacity: hasBeenVisible ? 1 : 0,
        transform: hasBeenVisible ? 'translateX(0)' : 'translateX(-10%)',
    });

    return (
        <animated.div ref={refElement} className="wallpaper-container" style={animation}>
            <figure className="image-container">
                <img src={image} alt={title} />
            </figure>
            <div className="wallpaper_description">
                <h2 className="title_description">{title}</h2>
                <p className="text_description">{description}</p>
                <Button url={downloadUrl}>Усатновить</Button>
            </div>
        </animated.div>
    );
};

const Wallpaper = () => {
    const [visibleSections, setVisibleSections] = useState({
        space: false,
        wave: false,
        mountain: false,
    });

    const refs = {
        space: useRef(null),
        wave: useRef(null),
        mountain: useRef(null),
    };

    const setVisibility = (section) => (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [section]: true }));
        }
    };

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observers = {};

        for (const section in refs) {
            observers[section] = new IntersectionObserver(setVisibility(section), observerOptions);
            if (refs[section].current) {
                observers[section].observe(refs[section].current);
            }
        }

        return () => {
            for (const section in refs) {
                if (refs[section].current) {
                    observers[section].unobserve(refs[section].current);
                }
            }
        };
    }, []);

    const sections = [
        {
            ref: refs.space,
            hasBeenVisible: visibleSections.space,
            image: './images/B.png',
            title: 'Space',
            description: 'Fourth wallpaper pack is a variation on the popular topological wallpapers! Two slightly different designs in multiple colors and crisp 5k resolution!',
            downloadUrl: 'https://drive.google.com/drive/folders/1zN8UdzfGAX_ybKCxhQUZ0baO5qvQekYi',
        },
        {
            ref: refs.wave,
            hasBeenVisible: visibleSections.wave,
            image: './images/Ocean Blue.jpg',
            title: 'Wave',
            description: 'Third wallpaper pack coming in strong! Same wavy design, multiple colors in crisp 5k resolution!',
            downloadUrl: 'https://drive.google.com/file/d/1-2kH2tZ1rdg2P0J868A7nL-4D1voHGhN/view?usp=share_link',
        },
        {
            ref: refs.mountain,
            hasBeenVisible: visibleSections.mountain,
            image: './images/mountain.jpg',
            title: 'Mountains',
            description: 'A majestic mountain range, offering a panoramic view of towering peaks and rugged terrain, evoking a sense of adventure and tranquility.',
            downloadUrl: 'https://drive.google.com/file/d/1RiFXVMkyXIq9FUJb8LYgxcxtVS7YCgaa/view?usp=sharing',
        },
    ];

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
                    {sections.map((section) => (
                        <AnimatedSection
                            key={section.title}
                            refElement={section.ref}
                            hasBeenVisible={section.hasBeenVisible}
                            image={section.image}
                            title={section.title}
                            description={section.description}
                            downloadUrl={section.downloadUrl}
                        />
                    ))}
                </div>
            </main>
            <Footer />
            <ScrollButton />
        </div>
    );
};

export default Wallpaper;
