import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wrapper, Title, Content, SocialList } from './Social.styles';

const Social = () => (
    <Wrapper>
        <Content>
            <SocialList>
                <ul>
                    <li><FontAwesomeIcon icon={faGithub} size='2x'/><p>GitHub</p></li>
                    <li><FontAwesomeIcon icon={faTwitter} size='2x'/><p>Twitter</p></li>
                    <li><FontAwesomeIcon icon={faLinkedin} size='2x'/><p>LinkedIn</p></li>
                </ul>
            </SocialList>
        </Content>
        <Title>
            <h1>Find me on</h1>
        </Title>
    </Wrapper>
);

export default Social;