import React from 'react';

import { Wrapper, Content, FindMeOn, Copyright } from './Footer.styles';

const Footer = () => (
    <Wrapper>
        <Content>
            <FindMeOn>
                <ul>
                    <li>GitHub</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </FindMeOn>
            <Copyright>
                <p>Copyright Luca Lazcano 2022</p>
            </Copyright>
        </Content>
    </Wrapper>
);

export default Footer;