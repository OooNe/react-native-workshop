import React from 'react';
import { Container, Content } from 'native-base'

import Shell from './src/Shell'

import NewsView from './src/views/News'

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Shell>
                    <NewsView />
                </Shell>
            </Container>
        )
    }
}
