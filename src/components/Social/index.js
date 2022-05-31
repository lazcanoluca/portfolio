import React from 'react';

import { Wrapper, Title, Content, SocialList } from './Social.styles';

const Social = () => (
    <Wrapper>
        <Title>
            <h2>You can find me on</h2>
        </Title>
        <Content>
            <SocialList>
                <ul>
                    <li>GitHub</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </SocialList>
        </Content>
    </Wrapper>
);

export default Social;