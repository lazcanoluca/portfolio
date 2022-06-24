import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wrapper, Title, Content, SocialList } from './Social.styles';

import { link_github, link_linkedin, link_twitter } from '../../links';

const Social = () => (
    <Wrapper>
        <Content>
            <SocialList>
                <ul>
                    <li className='github'><a href={link_github} target="_blank"><FontAwesomeIcon icon={faGithub} size='5x' className='icon' /><p>GitHub</p></a></li>
                    <li className='github'><a href={link_twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} size='5x' className='icon' /><p>Twitter</p></a></li>
                    <li className='github'><a href={link_linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} size='5x' className='icon' /><p>LinkedIn</p></a></li>
                    {/* <li className='twitter'><FontAwesomeIcon icon={faTwitter} size='5x' className='icon' /><p>Twitter</p></li>
                    <li className='linkedin'><FontAwesomeIcon icon={faLinkedin} size='5x' className='icon' /><p>LinkedIn</p></li>
                    <li><a href={link_github} target="_blank"><FontAwesomeIcon icon={faGithub} size = '2x' /></a></li>
                    <li><a href={link_twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} size = '2x' /></a></li>
                    <li><a href={link_linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} size = '2x' /></a></li> */}
                </ul>
            </SocialList>
        </Content>
        <Title>
            <h1>Find me on</h1>
        </Title>
    </Wrapper>
);

export default Social;