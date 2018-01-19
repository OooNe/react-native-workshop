import React from 'react';
import { Container, Content } from 'native-base'

import Shell from './src/Shell'

export default class App extends React.Component {
    render() {
        console.log('dupa')

        return (
            <Container>
                <Shell />
            </Container>
        )
    }
}
