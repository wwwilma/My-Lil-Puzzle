import React from 'react';
import "./Button.css";

type ButtonProps = {
    text: string;
    onClick?: () => void;
};

/**
 * Button component for a clickable button. 
 * @param text Text on display on button.
 * @param onClick An onClick event.
 * @returns Element representing the button.
 */
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;