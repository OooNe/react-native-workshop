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

        const languages = ['HTML5', 'Java', 'Ruby', 'JavaScript', 'PHP']

        this.state = {
            languages: languages,
            filter: ''
        }

        this.handleFilter = this.handleFilter.bind(this)
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