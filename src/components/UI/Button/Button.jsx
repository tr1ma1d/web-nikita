import React from 'react';
import './Button.css';




const Button = ({ onclick, children, url}) => {

    const handleOnClick = () => {
        if(onclick) onclick();
        if(url) window.location.href = url;
    };


    return (
        <button onClick={handleOnClick}>
            {children}
        </button>
    );
};

export default Button;