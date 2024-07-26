// src/ImagePopup.js
import React from 'react';
import './PopupImage.css';

const ImagePopup = ({ imageSrc, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>X</button>
        <img src={imageSrc} alt="Popup" className="popup-image" />
      </div>
    </div>
  );
};

export default ImagePopup;
