import React from 'react';

import { Wrapper, TopBar, Header, Circulo, Rectangulos, SVG, CentralBar, Name, Navigation } from './HeroSection.styles';

const HeroSection = ({ image }) => (
    <Wrapper image = { image }>
        <TopBar>

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
                        <li>My projects</li>
                        <li>Contact Me</li>
                        <li>About Me</li>
                    </ul>
                </Navigation>
            </Header>
        </CentralBar>
    </Wrapper>
    // <div>
    //     Hero section
    // </div>
)

export default HeroSection;