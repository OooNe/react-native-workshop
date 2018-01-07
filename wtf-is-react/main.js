/*global React, ReactDOM */

const languages = ['HTML5', 'Java', 'Ruby', 'JavaScript', 'PHP']

function List(props) {
    return React.createElement('ul', null, languages.map(function(language, index) {
        return React.createElement('li', { key: index }, React.createElement('a', { href: `/${language}` }, language))
    }))
}

function App(props) {
    return React.createElement('div', null, React.createElement(List))
}

ReactDOM.render(
    React.createElement(App, {toWhat: 'World'}, null),
    document.getElementById('app')
)