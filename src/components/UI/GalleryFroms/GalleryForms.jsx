// src/GalleryForms.js
import React, { useState } from 'react';
import './GalleryForms.css';
import ImagePopup from '../Popup/PopupImage';

const GalleryForms = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const openPopup = (src) => {
    setImageSrc(src);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setImageSrc('');
  };

  return (
    <div>
      <div className="gallery-forms">
        <figure className="gallery-item" onClick={() => openPopup('/images/photo-myself.jpg')}>
          <div className="gallery-item_wrapper">
            <img src="/images/photo-myself.jpg" alt="first-image" />
          </div>
        </figure>
        <figure className="gallery-item" onClick={() => openPopup('/images/laptop.jpg')}>
          <div className="gallery-item_wrapper">
            <img src="/images/laptop.jpg" alt="second-image" />
          </div>
        </figure>
        <figure className="gallery-item" onClick={() => openPopup('/images/ispring-photo-my-cam.jpg')}>
          <div className="gallery-item_wrapper">
            <img src="/images/ispring-photo-my-cam.jpg" alt="third-image" />
          </div>
        </figure>
        <figure className="gallery-item" onClick={() => openPopup('/images/photo-coding.jpg')}>
          <div className="gallery-item_wrapper">
            <img src="/images/photo-coding.jpg" alt="fourth-image" />
          </div>
        </figure>
        <figure className="gallery-item" onClick={() => openPopup('/images/photo-full.jpg')}>
          <div className="gallery-item_wrapper">
            <img src="/images/photo-full.jpg" alt="fifth-image" />
          </div>
        </figure>
        <figure className="gallery-item" onClick={() => openPopup('/images/photo-film.jpg')}>
          <div className="gallery-item_wrapper">
            <img src="/images/photo-film.jpg" alt="sixth-image" />
          </div>
        </figure>
        <figure className="gallery-item" onClick={() => openPopup('/images/laptop-code.jpg')}>
          <div className="gallery-item_wrapper">
            <img src="/images/laptop-code.jpg" alt="seventh-image" />
          </div>
        </figure>
      </div>
      <ImagePopup imageSrc={imageSrc} isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default GalleryForms;
