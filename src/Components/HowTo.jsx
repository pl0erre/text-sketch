// Basic
import React, { Component } from 'react';
import '../Css/HowTo.css';


export default class HowTo extends Component {
  render() {
    return (
        <div className="howto-info">
          <h2>Summarize any text in no time</h2>
          <p>Just follow these steps to get your summary:</p>
          <ul>
            <li>Copy Url</li>
            <li>Paste in</li>
            <li>Select length</li>          
            <li>process...</li>
            <li>Done!</li>
          </ul>
          <p>The only thing we connot do for you is reading the summary</p>
        </div>
    )
  }
}
