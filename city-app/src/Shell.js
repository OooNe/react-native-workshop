import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { Drawer, Header, Body, Text, Right, Button, Icon, Title } from 'native-base'
import { AppLoading, Font } from 'expo'

import Sidebar from './Sidebar'

export default class Shell extends PureComponent {
    static propTypes = {
        children: PropTypes.any
    }

    state = {
        isReady: false
    }

    async cacheResourcesAsync() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    onDrawerOpen = () => {
        this._drawer._root.open()
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this.cacheResourcesAsync}
                    onFinish={() => { this.setState(() => ({ isReady: true })) }}
                    onError={console.warn}
                />
            );
        }

        return (
            <Drawer
                ref={(d) => this._drawer = d}
                content={<Sidebar />}
            >
                <Header>
                    <Body>
                        <Title>Wrocław</Title>
                    </Body>
                    <Right>
                        <Button onPress={this.onDrawerOpen} transparent>
                            <Icon style={{ color: '#FFF' }} name='menu' />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    {this.props.children}
                </ScrollView>
            </Drawer>
        )
    }
}