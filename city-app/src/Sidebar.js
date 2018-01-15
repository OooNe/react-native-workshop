import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { Container, Content, List, ListItem, Left, Right, Text, Icon, Badge, Body } from 'native-base'
import { Link } from 'react-router-native'

const drawerCover = require('../assets/sidebar.png')

const Drawer = ({ handleDrawerClose }) => (
    <Container>
        <Content style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
            <Image source={drawerCover} style={styles.drawerCover} />
            <List icon>
                <ListItem icon>
                    <Left>
                        <Icon name={'md-paper'} style={{ color: "#777", fontSize: 26, width: 30 }} />
                    </Left>
                    <Body>
                        <Link to={'/'} onPress={() => { handleDrawerClose() }}>
                            <Text>Wiadomości</Text>
                        </Link>
                    </Body>
                    <Right>
                        <Badge primary>
                            <Text>2</Text>
                        </Badge>
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name={'md-mail'} style={{ color: "#777", fontSize: 26, width: 30 }} />
                    </Left>
                    <Body>
                        <Link to={'report'} onPress={() => { handleDrawerClose() }}>
                            <Text>Zgłoszenia</Text>
                        </Link>
                    </Body>
                </ListItem>
            </List>
        </Content>
    </Container>
)

Drawer.propTypes = {
    handleDrawerClose: PropTypes.func
}

const styles = {
    drawerCover: {
        alignSelf: "stretch",
        height: 200,
        width: null,
        marginBottom: 10
    }
}

export default Drawer
