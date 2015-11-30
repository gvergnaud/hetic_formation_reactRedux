import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchGiphs } from '../actions'
import Giphy from '../components/Giphy'

@connect(
  (state) => ({ giphs: state.giphs })
)
class GiphyContainer extends Component {

  render() {
    return <Giphy
      giphs={this.props.giphs}
      onFetchGiphs={(query) => this.props.dispatch(fetchGiphs(query))}
    />
  }
}


export default GiphyContainer
