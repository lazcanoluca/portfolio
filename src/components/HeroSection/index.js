import React from 'react';

import { Wrapper, Content, Text } from './HeroSection.styles';

const HeroSection = ({ image }) => (
    <Wrapper image = { image }>
        <Content>
            <Text>
                HERO SECTION
            </Text>
        </Content>
    </Wrapper>
    // <div>
    //     Hero section
    // </div>
)

export default HeroSection;