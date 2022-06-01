import React from 'react';

import { Wrapper, Content, Text } from './HeroSection.styles';

const HeroSection = ({ image }) => (
    <Wrapper image = { image }>
        <Content>
            <Text>
                <h1>Welcome</h1>
                <p>to my corner of the internet :D</p>
            </Text>
        </Content>
    </Wrapper>
    // <div>
    //     Hero section
    // </div>
)

export default HeroSection;