import React, { useState, useEffect } from 'react';
import { Container, Header, Message, Icon } from 'semantic-ui-react';

import * as path from 'path-browser';
import ReactMarkdown from 'react-markdown';

const bulmaStyles = {};

interface LearnProps {
    contentPath: string;
}

function Learn(props: LearnProps) {
    const [content, setContent] = useState(null);

    useEffect(
        () => {
            setContent(`Talep edilen içerik yolu: /${props.contentPath}`);
        },
        [props.contentPath]
    );

    return (
        <div>
            <Container>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='caret square right' circular />
                    <Header.Content>Egitim</Header.Content>
                </Header>
                <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                        <Message.Header>Yükleniyor...</Message.Header>
                        Bu sayfa yapım aşamasında.
                    </Message.Content>
                </Message>
                <br/>
            </Container>
        </div>
    );
}

export {
    Learn as default,
};
