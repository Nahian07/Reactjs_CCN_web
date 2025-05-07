import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 text-white shadow-md">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <div>
                    <img src="Logo/Logo.png" alt="CCN Logo" className="w-24" />
                </div>
                <div className="md:hidden" onClick={toggleMenu}>
                    <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                </div>
                <ul className={`md:flex space-x-8 absolute md:static w-full md:w-auto transition-all duration-300 ${isOpen ? 'top-16 bg-gray-800' : '-top-96'}`}>
                    {['HOME', 'ABOUT', 'COURSES', 'BLOG', 'CONTACT'].map((item) => (
                        <li key={item} className="text-lg p-2">
                            <a href="#" className="hover:text-yellow-400">{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;