import React from 'react';
import { View, Text } from 'react-native'
import { Container } from 'native-base'

import Shell from './src/Shell'

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Shell>
                    <View>
                        <Text>Hello World</Text>
                    </View>
                </Shell>
            </Container>
        )
    }
}
