import React from 'react';

import { Wrapper, Title, Content, MessageForm, Mail, Message } from './Contact.styles';

const Contact = () => (
    <Wrapper>
        <Title>
            <h1>Contact Me</h1>
        </Title>
        <Content>
            <Mail>
                <p className='mail'>lazcanoluca@gmail.com</p>
                <p className='phone'>+54 9 11 xxxx xxxx</p>
            </Mail>
        </Content>
    </Wrapper>
);

export default Contact;