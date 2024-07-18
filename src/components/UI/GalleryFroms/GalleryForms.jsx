import React from 'react';
import './GalleryForms.css';


const GalleryForms = () => {

    return (
        <div className="gallery-forms">
            <figure className="gallery-item">
                <div className="gallery-item_wrapper">
                    <img src="/images/photo-myself.jpg" alt="firts-image" />
                </div>
            </figure>
            <figure className="gallery-item">
                <div className="gallery-item_wrapper">
                    <img src="/images/laptop.jpg" alt="second-image" />
                </div>
            </figure>
            <figure className="gallery-item">
                <div className="gallery-item_wrapper">
                    <img src="/images/ispring-photo-my-cam.jpg" alt="third-image" />
                </div>
            </figure>
            <figure className="gallery-item">
                <div className="gallery-item_wrapper">
                    <img src="/images/photo-coding.jpg" alt="fourth-image" />
                </div>
            </figure>
            <figure className="gallery-item">
                <div className="gallery-item_wrapper">
                    <img src="/images/photo-full.jpg" alt="fifth-image" />
                </div>
            </figure>
            <figure className="gallery-item">
                <div className="gallery-item_wrapper">
                    <img src="/images/photo-film.jpg" alt="sixth-image" />
                </div>
            </figure>
            <figure className="gallery-item">
                <div className="gallery-item_wrapper">
                    <img src="/images/laptop-code.jpg" alt="seventh-image" />
                </div>
            </figure>
        </div>
    );
};

export default GalleryForms;