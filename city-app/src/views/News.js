import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, FlatList, Image, View, DatePickerAndroid, Picker } from 'react-native'
import { Container, Content, Card, CardItem, Text, Body, Left, Right, Icon } from 'native-base'
import compose from 'lodash/fp/compose'
import moment from 'moment'

import withJsonData from '../components/hoc/withData'

class NewsView extends PureComponent {
    static propTypes = {
        data: PropTypes.object
    }

    async componentDidMount() {
        // try {
        //     const {action, year, month, day} = await DatePickerAndroid.open({
        //         // Use `new Date()` for current date.
        //         // May 25 2020. Month 0 is January.
        //         date: new Date(2020, 4, 25)
        //     });
        //     if (action !== DatePickerAndroid.dismissedAction) {
        //         // Selected year, month (0-11), day
        //     }
        // } catch ({code, message}) {
        //     console.warn('Cannot open date picker', message);
        // }
    }

    render() {
        const { data } = this.props

        return (
            <Container>
                <Content padder>
                    <Picker>
                        
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
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
