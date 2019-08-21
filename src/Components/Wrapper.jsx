import React, { Component } from 'react'
import '../Css/Wrapper.css';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="App-Wrapper">
        {this.props.children}
      </div>
    )
  }
}
