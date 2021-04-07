import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label htmlFor="search">Search for videos</label>
          <input
            type="search"
            name="search"
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar
