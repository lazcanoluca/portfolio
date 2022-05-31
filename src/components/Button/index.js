import React from 'react';

import { Wrapper } from './Button.styles';

const Button = ({ prompt, link }) => {

    const handleClick = () => {
        window.open(link);
    }

    return (
        <Wrapper onClick = {handleClick}>
            <p>{prompt}</p>
        </Wrapper>
    )
};

export default Button;