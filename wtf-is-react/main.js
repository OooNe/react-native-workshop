/*global React, ReactDOM */

function App(props) {
    return React.createElement('div', null, `Hello ${props.toWhat}`)
}

ReactDOM.render(
    React.createElement(App, {toWhat: 'World'}, null),
    document.getElementById('app')
)