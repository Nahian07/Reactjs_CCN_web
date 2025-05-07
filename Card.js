import React from 'react';

const Card = ({ image, title, subtitle, details }) => {
    return (
        <div className="p-4 bg-gray-800 text-white rounded-xl shadow-lg flex flex-col items-center">
            <img src={image} alt={title} className="w-32 h-32 rounded-full mb-4" />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-300">{subtitle}</p>
            <p className="mt-4">{details}</p>
            <button className="mt-4 bg-blue-500 px-4 py-2 rounded">Read More</button>
        </div>
    );
};

export default Card;