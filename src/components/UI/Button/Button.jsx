import React from 'react';
import './Button.css';
const Button = ({ onclick, children }) => {
    return (
        <button onClick={onclick}>
            {children}
        </button>
    );
};

export default Button;