// Basic
import React, { Component } from 'react';
import '../Css/MainLayout.css';

// Components
import Nav from './Nav';
import Footer from './Footer';
import Wrapper from './Wrapper';


export default class MainLayout extends Component {
  
  render() {
    return (
      <div className="App-MainLayout">
        <Nav />
          <Wrapper>
            {this.props.children}
          </Wrapper>
        <Footer />
      </div>
    )
  }
}
