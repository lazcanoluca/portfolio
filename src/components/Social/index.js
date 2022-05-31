import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wrapper, Title, Content, SocialList } from './Social.styles';

const Social = () => (
    <Wrapper>
        <Title>
            <h2>You can find me on</h2>
        </Title>
        <Content>
            <SocialList>
                <ul>
                    <li><FontAwesomeIcon icon={faGithub} />GitHub</li>
                    <li><FontAwesomeIcon icon={faTwitter} />Twitter</li>
                    <li><FontAwesomeIcon icon={faLinkedin} />LinkedIn</li>
                </ul>
            </SocialList>
        </Content>
    </Wrapper>
);

export default Social;