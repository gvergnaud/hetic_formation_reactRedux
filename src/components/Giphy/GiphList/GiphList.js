import React, { PropTypes } from 'react'

import './GiphList.less'

const GiphList = ({ giphs }) => (
  <div className="GiphList">
    {giphs.map(giph =>
      <Giph {...giph} key={giph.id} />
    )}
  </div>
)

const Giph = ({ images }) => {
  const { url, height, width } = images.fixed_height

  return (
    <div className="GiphList-item" style={{width, height}}>
      <img src={url} width={width} height={height} />
    </div>
  )
}

const { arrayOf, shape, string } = PropTypes

GiphList.propTypes = {
  giphs: arrayOf(shape({
    images: shape({
      fixed_height: shape({
        url: string.isRequired,
        height: string.isRequired,
        width: string.isRequired
      })
    })
  })).isRequired
}

export default GiphList
