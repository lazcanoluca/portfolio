import React from 'react';

import { Wrapper, Title, Content } from './About.styles';

const About = () => (
    <Wrapper>
        <Title>
            <div className='dummy'></div>
            <h1>About me</h1>
        </Title>
        <Content>
            <div className='text'>
                <div>
                    <p> {'>'} i am 21 years old. i was born in angers, france, in 2001. i was raised in buenos aires, argentina, where i attended the french lyceum. as such, i am fluent in both spanish and french.</p>
                </div>
                <p> {'>'} i attended and graduated high-school in the polytechnic school of puerto madryn, with a technician degree in electronics.</p>
                <p> {'>'} there i made my first approach to coding, making arduino projects, programming 3d printers, robots and even participating in the robots league.</p>
                <p> {'>'} i learned python on my own, making some interesting albeit simple projects on the way.</p>
                <p> {'>'} now i'm an undergrad student of engineering at the university of buenos aires, where i have passed courses on algorithms and data structures. c is challeging.</p>
                <p> {'>'} on my freetime i learn web development, mainly with freecodecamp's free resources.</p>
                <p> {'>'} i plan on sharpening my backend skills, as solving problems, and being 'under the hood' is my kind of deal.</p>
            </div>
        </Content>
    </Wrapper>
);

export default About;