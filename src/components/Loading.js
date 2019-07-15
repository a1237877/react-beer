import React from 'react'
import PropTypes from 'prop-types'

const Loading = (props) => (
  <div className="loader">
    <img src="/images/ball.svg" alt="loaing" />
    <h2>{props.message}</h2>
  </div>
)
Loading.propTypes = {
  message:PropTypes.string
}
 
export default Loading;