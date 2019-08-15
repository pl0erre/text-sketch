import React, { Component } from 'react';
import Nav from './Nav';
import '../Css/MainLayout.css';
import Footer from './Footer';

export default class MainLayout extends Component {
  
  render() {
    return (
      <div className="App-MainLayout">
        <Nav />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
