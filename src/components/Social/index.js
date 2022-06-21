import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wrapper, Title, Content, SocialList } from './Social.styles';

const Social = () => (
    <Wrapper>
        <Content>
            <SocialList>
                <ul>
                    <li className='github'><FontAwesomeIcon icon={faGithub} size='5x' className='icon' /><p>GitHub</p></li>
                    <li className='twitter'><FontAwesomeIcon icon={faTwitter} size='5x' className='icon' /><p>Twitter</p></li>
                    <li className='linkedin'><FontAwesomeIcon icon={faLinkedin} size='5x' className='icon' /><p>LinkedIn</p></li>
                </ul>
            </SocialList>
        </Content>
        <Title>
            <h1>Find me on</h1>
        </Title>
    </Wrapper>
);

export default Social;