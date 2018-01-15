import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Drawer, Header, Body, Right, Button, Icon, Title, Text } from 'native-base'
import { AppLoading, Font } from 'expo'
import { NativeRouter, Route, Link, BackButton } from 'react-router-native'


import Sidebar from './Sidebar'
import ReportView from "./views/Report";
import NewsView from "./views/News";

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

    onDrawerClose = () => {
        this._drawer._root.close()
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
            <NativeRouter>
                <Drawer
                    ref={(d) => this._drawer = d}
                    content={<Sidebar handleDrawerClose={this.onDrawerClose} />}
                    onClose={this.onDrawerClose}
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
                    <BackButton />
                    <Route exact path="/" component={NewsView}/>
                    <Route path="/report" component={ReportView}/>
                </Drawer>
            </NativeRouter>
        )
    }
}