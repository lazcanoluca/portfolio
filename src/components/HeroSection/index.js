import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { link_github, link_linkedin, link_twitter, link_cv_sp, link_cv_en } from '../../links';


import { Wrapper,
        TopBar,
        Header,
        Circulo,
        Rectangulos,
        SVG,
        CentralBar,
        Name,
        Navigation,
        Config,
        Social,
        Language,
        Mode } from './HeroSection.styles';

const HeroSection = ({ image }) => {

    return (
    <Wrapper image = { image }>
        {/* <Parallax pages={1}> */}
            {/* <ParallaxLayer offset={0}> */}
                <TopBar>
                    <Config>
                        <Language>

                        </Language>
                        <Mode>

                        </Mode>
                    </Config>
                    <Social>
                        <ul>
                            <li><a href={link_github} target="_blank"><FontAwesomeIcon icon={faGithub} size = '2x' /></a></li>
                            {/* <li><a href={link_twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} size = '2x' /></a></li> */}
                            <li><a href={link_linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} size = '2x' /></a></li>
                            <li><a href={link_cv_en} target="_blank"><FontAwesomeIcon icon={faFile} size = '2x' /></a></li>
                        </ul>
                    </Social>
                </TopBar>
                <CentralBar>
                    <SVG>
                        <Rectangulos>
                            <svg className='fondo'>
                                <rect className='rect-fondo' />
                            </svg>
                            <svg className='top'>
                                <rect className='rect-top' />
                            </svg>
                        </Rectangulos>
                        <Circulo>
                            <svg>
                                <circle />
                            </svg>
                        </Circulo>
                    </SVG>
                    <Header>
                        <Name>
                            <h1>Luca</h1>
                            <h2>Jr Web Dev</h2>
                        </Name>
                        <Navigation>
                            <ul>
                                <li>Projects</li>
                                <li>Skills</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </Navigation>
                    </Header>
                </CentralBar>
            {/* </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.5} factor={1.5}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                }}
            /> */}
        {/* </Parallax> */}


    </Wrapper>
    // <div>
    //     Hero section
    // </div>
    )
};

export default HeroSection;