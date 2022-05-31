import React from 'react';

import { Wrapper, Content, Navigation, Name } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Name>
                <h1>Luca</h1>
            </Name>
            <Navigation>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </Navigation>
        </Content>
    </Wrapper>
);

export default Header;