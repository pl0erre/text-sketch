import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import '../Css/Nav.css';


export default class Nav extends Component {
  render() {
    return (
      <div className="App-Nav">
        <nav className="teal darken-3">
          <div className="nav-wrapper">
            <a href="/task" className="brand-logo left lime-text">+</a>
            <ul id="nav-mobile" className="right">
              <li><a href="/info" className="lime-text">Info</a></li>
              <li><a href="/collection" className="lime-text">Collection</a></li>
              <li><a href="/profile" className="lime-text">Profile</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
