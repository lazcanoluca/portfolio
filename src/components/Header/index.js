import React from 'react';

import { Wrapper, Content, Navigation, Name, SocialMedia } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <SocialMedia>
                <ul>
                    <li>GitHubIcon</li>
                    <li>TwitterIcon</li>
                    <li>LinkedInIcon</li>
                </ul>
            </SocialMedia>
            <Name>
                <h1>Luca</h1>
                <h2>Jr Web Dev</h2>
            </Name>
            <Navigation>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                    <li>Resume</li>
                    <li>Blog</li>
                </ul>
            </Navigation>
        </Content>
    </Wrapper>
);

export default Header;