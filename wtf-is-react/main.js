/*global React, ReactDOM */
function List(props) {
    const languagesToShow = props.languages.filter(language => language.includes(props.filter))

    return (
        <ul>
            {languagesToShow.map((item, index) => (
                <li>
                    <a href={`/${item}`} key={index}>{item}</a>
                </li>)
            )}
        </ul>
    )
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
        fetch('http://www.mocky.io/v2/5a52153e2e00000722c03a57')
            .then(data => data.json())
            .then(data => {
                this.setState(() => ({
                        languages: data.map(function (item) {
                            return item.name
                        })
                    }))
                })
    }

    handleFilter(e) {
        const inputValue = e.target.value

        this.setState(() => ({
                filter: inputValue
        }))
    }

    render() {
        const { languages, filter } = this.state

        return (
            <div>
                <h1>Sample App</h1>
                <input type="text" onChange={this.handleFilter}/>
                <List languages={languages} filter={filter} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))