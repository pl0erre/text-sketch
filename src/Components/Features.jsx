// Basic
import React, { Component } from 'react'
import '../Css/Features.css';
import {CardPanel} from 'react-materialize';



// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Features extends Component {
  render() {
    return (
        <div className="App-Features">
          <CardPanel className="features-item blue-grey lighten-3 grey-text text-darken-3">
            <h2>Current Supported Features</h2> 
          </CardPanel>
          <CardPanel className="features-item blue-grey lighten-3 grey-text text-darken-3">
            <h4>Summarization</h4>
            <FontAwesomeIcon icon="book"/>
          </CardPanel>
          <CardPanel className="features-item blue-grey lighten-3 grey-text text-darken-3">
            <h4>Language detection</h4>
            <FontAwesomeIcon icon="globe-europe"/>
          </CardPanel>
          <CardPanel className="features-item blue-grey lighten-3 grey-text text-darken-3">
            <h4>Classification</h4>
            <FontAwesomeIcon icon="list-ul"/>
          </CardPanel>
        </div>
    )
  }
}