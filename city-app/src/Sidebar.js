import React from 'react'
import { Image } from 'react-native'
import { Container, Content, List, ListItem, Left, Right, Text, Icon, Badge, Body } from 'native-base'

const drawerCover = require('../assets/sidebar.png')

const Drawer = () => (
    <Container>
        <Content style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
            <Image source={drawerCover} style={styles.drawerCover} />
            <List icon>
                <ListItem icon>
                    <Left>
                        <Icon name={'md-paper'} style={{ color: "#777", fontSize: 26, width: 30 }} />
                    </Left>
                    <Body>
                        <Text>Wiadomości</Text>
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
                        <Text>Zgłoszenia</Text>
                    </Body>
                </ListItem>
            </List>
        </Content>
    </Container>
)

const styles = {
    drawerCover: {
        alignSelf: "stretch",
        height: 200,
        width: null,
        marginBottom: 10
    }
}

export default Drawer
