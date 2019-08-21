// Basic
import React, { Component } from 'react'
import '../Css/Features.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Features extends Component {
  render() {
    return (
        <div className="features-info">
          <h2>Supported Features</h2>
          <div className="features-container">
            <div className="feature">
              <h4>Summarization</h4>
              <FontAwesomeIcon icon="book"/>
            </div>
            <div className="feature">
              <h4>Classification</h4>
              <FontAwesomeIcon icon="list-ul"/>
            </div>
            <div className="feature">
              <h4>Language detection</h4>
              <FontAwesomeIcon icon="globe-europe"/>
            </div>
          </div>
        </div>
    )
  }
}
