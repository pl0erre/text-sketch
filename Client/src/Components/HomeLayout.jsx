import React, { Component } from 'react'
import '../Css/HomeLayout.css';

export default class HomeLayout extends Component {
  render() {
    return (
      <div className="App-HomeLayout">
        {this.props.children}
      </div>
    )
  }
}
