import React from 'react';

import projects from '../Projects/projects.json';

// Components
import HeroSection from './HeroSection';
import Contact from './Contact';
import Projects from './Projects';
// import About from './About';
import Social from './Social';
// import Resume from './Resume';

const Home = () => {

    console.log(projects);
    console.log(projects.projects);

    return (
        <>
            <HeroSection />
            <Projects projects = { projects.projects } />
            <Contact />
            <Social />
        </>
    )
};

export default Home;