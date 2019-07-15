import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class Header extends React.Component{
  static propTypes = {
    sideName:PropTypes.string
  }
  render() {
    return (
       <h1>
         <Link to="/">{this.props.sideName}</Link>
       </h1>
    );
  }
}
export default Header