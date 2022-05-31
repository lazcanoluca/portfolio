import React from 'react';

import { Wrapper, Title, Content, MessageForm, Mail } from './Contact.styles';

const Contact = () => (
    <Wrapper>
        <Title>
            <h2>Contact Me</h2>
        </Title>
        <Content>
            <MessageForm>
                Message form
            </MessageForm>
            <Mail>
                Email
            </Mail>
        </Content>
    </Wrapper>
);

export default Contact;