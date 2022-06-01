import React from 'react';

import { Wrapper } from './Button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ({ prompt, link, logo }) => {

    const handleClick = () => {
        window.open(link);
    }

    return (
        <Wrapper onClick = {handleClick}>
            <p>{prompt}</p>
            {logo != null && <FontAwesomeIcon className='icon' icon={logo} size='lg'/>}
        </Wrapper>
    )
};

export default Button;