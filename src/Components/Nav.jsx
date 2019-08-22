import React, { Component } from 'react'
import '../Css/Nav.css';

import {Navbar, NavItem } from 'react-materialize';


export default class Nav extends Component {
  render() {
    return (
      <Navbar className="nav-bar teal darken-3" 
              brand={<a href="/task" className="lime-text"><span className="nav-plus" >+</span></a>} 
              alignLinks="right" 
              sidenav={
                <>
                  <li><NavItem href="/Info">Info</NavItem></li>
                  <li><NavItem href="/Collection">Collection</NavItem></li>
                  <li><NavItem href="/Profile">Profile</NavItem></li>
                </>
                }>
        <NavItem className="nav-item lime-text" href="/Info">
          Info
        </NavItem>
        <NavItem className="nav-item lime-text"  href="/Collection">
          Collection
        </NavItem>
        <NavItem  className="nav-item lime-text" href="/Profile">
          Profile
        </NavItem>
      </Navbar> 
    )
  }
}
