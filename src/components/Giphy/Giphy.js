import React, { Component, PropTypes } from 'react'
import GiphySearchBar from './GiphySearchBar'
import GiphList from './GiphList'

class Giphy extends Component {

  static propTypes = {
    giphs: PropTypes.array.isRequired,
    onFetchGiphs: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="Giphy">
        <GiphySearchBar onFetchGiphs={this.props.onFetchGiphs} />
        <GiphList giphs={this.props.giphs} />
      </div>
    )
  }
}


export default Giphy
