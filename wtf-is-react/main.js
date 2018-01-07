/*global React, ReactDOM */

function List(props) {
    const languagesToShow = props.languages.filter(function (language) {
        return language.includes(props.filter)
    })

    return React.createElement('ul', null, languagesToShow.map(function(language, index) {
        return React.createElement('li', { key: index }, React.createElement('a', { href: `/${language}` }, language))
    }))
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            languages: [],
            filter: ''
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    componentWillMount() {
        const self = this

        fetch('http://www.mocky.io/v2/5a52153e2e00000722c03a57')
            .then(function (data) {
                return data.json()
            }).then(function (data) {
                self.setState(function () {
                    return {
                        languages: data.map(function (item) {
                            return item.name
                        })
                    }
                })
            })
    }

    handleFilter(e) {
        const inputValue = e.target.value

        this.setState(function () {
            return {
                filter: inputValue
            }
        })
    }

    render() {
        return React.createElement('div', null,
            [
                React.createElement('h1', null, 'Sample App'),
                React.createElement('input', { onChange: this.handleFilter }),
                React.createElement(List, { languages: this.state.languages, filter: this.state.filter })
            ]
        )
    }
}

ReactDOM.render(
    React.createElement(App, {toWhat: 'World'}, null),
    document.getElementById('app')
)