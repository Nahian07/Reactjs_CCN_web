import React from 'react';

const InfoSection = ({ title, items }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default InfoSection;