import React from 'react';
import './Text.css';

interface TextProps {
    text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
    return (
        <p className='text'>
            {text}
        </p>
    );
};

export default Text;