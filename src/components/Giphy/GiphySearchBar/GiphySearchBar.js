import React, { Component, PropTypes } from 'react'
import UIButton from '../../UIButton/'

import './GiphySearchBar.less'

class GiphySearchBar extends Component {

  static propTypes = {
    onFetchGiphs: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isInputEmpty: true
    }
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
      <form
        className="GiphySearchBar"
        onSubmit={this._handleSubmit}>
        <input
          className="GiphySearchBar-input"
          type="text"
          ref="input" />
        <UIButton onClick={this._handleSubmit}>Search</UIButton>
      </form>
    )
  }
}


export default GiphySearchBar
