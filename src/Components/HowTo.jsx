// Basic
import React, { Component } from 'react';
import '../Css/HowTo.css';
import {Card, CardPanel} from 'react-materialize';


export default class HowTo extends Component {
  render() {
    return (
        <div className="App-HowTo">
          <CardPanel className="How-To-Wrapper grey darken-3 white-text">
            <h2>Summarize any text in no time</h2>
            <CardPanel className="How-To-container">
              <ul>
                <Card className="How-To-item item-one" horizontal><li>Copy Url</li></Card>
                <Card className="How-To-item item-two" horizontal><li>Paste in</li></Card>
                <Card className="How-To-item item-three" horizontal><li>Select length</li>  </Card>        
                <Card className="How-To-item item-four" horizontal><li>process...</li></Card>
                <Card className="How-To-item item-five" horizontal><li>Done!</li></Card>
              </ul> 
            </CardPanel>
             <p>The only thing we connot do for you is reading!</p>
          </CardPanel>
        </div>
    )
  }
}


// 
// <div className="info-container">
//   <p>Just follow these steps to get your summary:</p>
//   <ul>
//     <li>Copy Url</li>
//     <li>Paste in</li>
//     <li>Select length</li>          
//     <li>process...</li>
//     <li>Done!</li>
//   </ul>
//   <p>The only thing we connot do for you is reading the summary</p>
// </div>