import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("Images/drone_view_of_CCNUST.png")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto relative z-10 text-center text-white py-20">
                <h1 className="text-4xl md:text-6xl font-bold">CCN University of Science and Technology</h1>
                <p className="mt-4 text-lg md:text-xl">Communicative Computing For Next Generation</p>
                <button className="mt-8 px-6 py-2 bg-red-600 rounded-lg hover:bg-red-800">Apply Now</button>
            </div>
        </section>
    );
};

export default Hero;