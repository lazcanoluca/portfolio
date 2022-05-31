import React from 'react';

import { Wrapper, Content, FindMeOn, Copyright } from './Footer.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <Wrapper>
        <Content>
            {/* <FindMeOn>
                <ul>
                    <li><FontAwesomeIcon icon={faGithub} />GitHub</li>
                    <li><FontAwesomeIcon icon={faTwitter} />Twitter</li>
                    <li><FontAwesomeIcon icon={faLinkedin} />LinkedIn</li>
                </ul>
            </FindMeOn> */}
            <Copyright>
                <p>Copyright Luca Lazcano 2022</p>
            </Copyright>
        </Content>
    </Wrapper>
);

export default Footer;