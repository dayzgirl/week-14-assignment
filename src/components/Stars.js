import React from 'react';

const Stars = ({ rating, onChange }) => {

    const handleClick = value => {
        onChange(value); 
    };

    return (
        <div className="stars">
            {[1, 2, 3, 4, 5].map(value => (
                <span
                    key={value} 
                    className={value <= rating ? 'star-filled' : 'star'} 
                    onClick={() => handleClick(value)} 
                    style={{ cursor: 'pointer' }} 
                >
                    {value <= rating ? '★' : '☆'} {/* Render filled star (★) or empty star (☆) based on the comparison with rating */}
                </span>
            ))}
        </div>
    );
};

export default Stars;
