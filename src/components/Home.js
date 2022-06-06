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

    const train_path = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Deux_TGV_%C3%A0_Paris-Lyon.jpg/1280px-Deux_TGV_%C3%A0_Paris-Lyon.jpg";

    console.log(projects);
    console.log(projects.projects);

    return (
        <>
            {/* <HeroSection image = { "https://solarsystem.nasa.gov/system/news_items/main_images/265_P50142.jpg" }/> */}
            <HeroSection image = { train_path }/>
            <Projects projects = { projects.projects } />
            <Contact />
            <Social />
        </>
    )
};

export default Home;