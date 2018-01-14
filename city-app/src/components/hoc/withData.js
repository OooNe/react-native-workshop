import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content, Spinner } from 'native-base'

export default function urlClosure(url) {
    return function withJsonData(Component) {
        return class WithData extends PureComponent {
            static propTypes = {
                children: PropTypes.any
            }

            state = {
                data: null
            }

            async componentWillMount() {
                try {
                    const data  = await fetch(url)
                    const jsonData = await data.json()

                    this.setState(() => ({ data: jsonData }))
                } catch(e) {
                    console.warn(e)
                }
            }

            render() {
                if (!this.state.data) {
                    return (
                        <Content>
                            <Spinner />
                        </Content>
                    )
                }

                return <Component data={this.state.data} />
            }
        }
    }
}