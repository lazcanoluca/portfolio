import React from 'react';

import { Wrapper, Title, Content, MessageForm, Mail } from './Contact.styles';

const Contact = () => (
    <Wrapper>
        <Title>
            <h2>Contact Me</h2>
        </Title>
        <Content>
            <p>Shoot me a message and I'll get back to you ASAP :D</p>
            <MessageForm>
                Message form
            </MessageForm>
            <p>or click to copy my email address to your clipboard</p>
            <Mail>
                <p>lazcanoluca@gmail.com</p>
            </Mail>
        </Content>
    </Wrapper>
);

export default Contact;