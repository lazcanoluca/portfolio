import React from 'react';

import { Wrapper, Title, Content, MessageForm, Mail, Message } from './Contact.styles';

const Contact = () => (
    <Wrapper>
        <Title>
            <h1>Contact Me</h1>
        </Title>
        <Content>
            {/* <Message>
                <p>Shoot me a message and I'll get back to you ASAP :D</p>
                <MessageForm>
                    Message form
                </MessageForm>
            </Message> */}
            <Mail>
                <p className='mail'>lazcanoluca@gmail.com</p>
                <p className='phone'>+54 9 11 xxxx xxxx</p>
            </Mail>
        </Content>
    </Wrapper>
);

export default Contact;