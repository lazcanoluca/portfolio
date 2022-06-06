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

                </Name>
                <Navigation>

                </Navigation>
            </Header>
        </CentralBar>
    </Wrapper>
    // <div>
    //     Hero section
    // </div>
)

export default HeroSection;