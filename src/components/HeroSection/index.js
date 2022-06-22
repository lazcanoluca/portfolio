import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';


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

const HeroSection = ({ image }) => (
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
                            <li><FontAwesomeIcon icon={faGithub} size = '2x' /></li>
                            <li><FontAwesomeIcon icon={faTwitter} size = '2x' /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} size = '2x' /></li>
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
                                <li>About me</li>
                                <li>Skills</li>
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

export default HeroSection;