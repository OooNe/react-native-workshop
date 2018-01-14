import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, FlatList, Image, View } from 'react-native'
import { Container, Content, Card, CardItem, Text, Body, Left, Right, Icon } from 'native-base'
import compose from 'lodash/fp/compose'
import moment from 'moment'

import withJsonData from '../components/hoc/withData'

class NewsView extends PureComponent {
    static propTypes = {
        data: PropTypes.object
    }

    render() {
        const { data } = this.props

        return (
            <Container>
                <Content padder>
                    <ScrollView>
                        <FlatList
                            data={data.newsitems.map(item => ({ ...item, key: item._id }))}
                            renderItem={({ item }) => (
                                <Card>
                                    <CardItem header style={{ justifyContent: 'space-between' }}>
                                        <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                            <Text>{moment(item.posted_date).fromNow()}</Text>
                                        </View>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={{uri: item.image}} style={{height: 100, width: null, flex: 1}}/>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text numberOfLines={3} style={{ lineHeight: 30 }}>
                                                {item.description}
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem footer style={{ justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name={'md-thumbs-up'} />
                                            <Text>{item.likes}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name={'md-thumbs-down'} />
                                            <Text>{item.dislikes}</Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            )}
                        />
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

export default compose(
    withJsonData('https://inshortstribute-mock-api.herokuapp.com/api/news')
)(NewsView)
