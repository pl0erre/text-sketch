import React, { Component } from 'react'
import '../Css/Nav.css';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className="App-Nav">
        <ul>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/process">Process</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    )
  }
}
