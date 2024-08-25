import React, { useState } from 'react';
import '../styles/buttongrp.css';

const EventButton = () => {
    const [selected, setSelected] = useState('Technical');

    const handleClick = (value) => {
        setSelected(value);
    };

    return (
        <div className="button-group">
            <button
                className={`button ${selected === 'Technical' ? 'selected' : ''}`}
                onClick={() => handleClick('Technical')}
            >Technical</button>
            <button
                className={`button ${selected === 'Non-Technical' ? 'selected' : ''}`}
                onClick={() => handleClick('Non-Technical')}
            >Non-Technical</button>
        </div>
    );
};

export default EventButton;