import React from 'react';

import { Wrapper, Content } from './Grid.styles';

const Grid = ({ children }) => (
    <Wrapper>
        <Content>
            { children }
        </Content>
    </Wrapper>
);

export default Grid;