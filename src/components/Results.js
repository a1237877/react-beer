import React from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
class Results extends React.Component {
  static propTypes = {
    loading:PropTypes.bool.isRequired,
    beers:PropTypes.array.isRequired
  }
  state = {  }
  render() { 
    if(this.props.loading){
      return <Loading message="加载中..." />
    }
  }
}
 
export default Results;