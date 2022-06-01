import React from 'react';

import { Wrapper, Title, Content, MessageForm, Mail, Message } from './Contact.styles';

const Contact = () => (
    <Wrapper>
        <Title>
            <h2>Contact Me</h2>
        </Title>
        <Content>
            {/* <Message>
                <p>Shoot me a message and I'll get back to you ASAP :D</p>
                <MessageForm>
                    Message form
                </MessageForm>
            </Message> */}
            <Mail>
                <p>Click to copy my email address to your clipboard</p>
                <p>lazcanoluca@gmail.com</p>
            </Mail>
        </Content>
    </Wrapper>
);

export default Contact;