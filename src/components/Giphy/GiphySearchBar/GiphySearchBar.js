import React, { Component, PropTypes } from 'react'


class GiphySearchBar extends Component {

  static propTypes = {
    onFetchGiphs: PropTypes.func.isRequired
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const value = this.refs.input.value.trim()
    if (value) {
      this.props.onFetchGiphs(value)
      this.refs.input.value = ''
    }
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="text" ref="input" />
      </form>
    )
  }
}


export default GiphySearchBar
