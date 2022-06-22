import React from 'react';

import { Wrapper, Title, Content, MessageForm, Info, Message } from './Contact.styles';

const Contact = () => (
    <Wrapper>
        <Title>
            <h1>Contact Me</h1>
        </Title>
        <Content>
            <Info>
                <p onClick={() => {navigator.clipboard.writeText('lazcanoluca@gmail.com')}} Title="Click to copy" className='mail'>lazcanoluca@gmail.com</p>
                <p onClick={() => {navigator.clipboard.writeText('+54 9 11 xxxx xxxx')}} className='phone'>+54 9 11 xxxx xxxx</p>
            </Info>
        </Content>
    </Wrapper>
);

export default Contact;