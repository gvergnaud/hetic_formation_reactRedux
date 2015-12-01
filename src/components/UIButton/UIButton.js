import React, { PropTypes } from 'react'

import './UIButton.less'

const UIButton = ({ onClick, children, style }) => (
  <button onClick={onClick} style={style} className="UIButton">
    {children}
  </button>
)

UIButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  style: PropTypes.object
}


export default UIButton
