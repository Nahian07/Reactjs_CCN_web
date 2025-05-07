import React from 'react';
import Header from '../components/header';
import Hero from '../components/Hero';
import Card from '../components/Card';
import InfoSection from '../components/InfoSection';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card 
                    image="Images/Tarikul Islam.jpeg" 
                    title="Dr. Md. Tariqul Islam Chowdhury" 
                    subtitle="Founder and Chairman" 
                    details="CCN University of Science & Technology" 
                />
                <Card 
                    image="Images/Dr. Shah Jahan.jpg" 
                    title="Prof. Dr. Engr. Md. Shah Jahan" 
                    subtitle="Vice Chancellor & Treasurer" 
                    details="CCN University of Science & Technology" 
                />
                <InfoSection 
                    title="Latest News" 
                    items={["Seminar on DSA", "Career Path Seminar", "2nd Convocation", "Iftar Party"]} 
                />
            </div>
        </>
    );
};

export default Home;
