import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wrapper, Content, Navigation, Name, SocialMedia } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <SocialMedia>
                <ul>
                    <li><FontAwesomeIcon icon={faGithub} size = '2x' /></li>
                    {/* <li><FontAwesomeIcon icon={faTwitter} size = '2x' /></li> */}
                    <li><FontAwesomeIcon icon={faLinkedin} size = '2x' /></li>
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