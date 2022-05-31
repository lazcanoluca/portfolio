import React from 'react';

// Components
import HeroSection from './HeroSection';
import Contact from './Contact';
import Projects from './Projects';
// import About from './About';
import Social from './Social';
// import Resume from './Resume';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Projects />
            <Contact />
            <Social />
        </>
    )
};

export default Home;