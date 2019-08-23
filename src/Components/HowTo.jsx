// Basic
import React, { Component } from 'react';
import '../Css/HowTo.css';
import {Card, CardPanel} from 'react-materialize';

// Utils
import Auth from '../Utils/Auth';
const auth = new Auth();


export default class HowTo extends Component {
  render() {
    let user = auth.getUser();
    return (
        <div className="App-HowTo">
          <CardPanel className="How-To-Wrapper grey darken-3 white-text">
            <h2>Hi {user.username}</h2>
            <h3>With Text Sketch you can summarize any text in no time</h3>
            <CardPanel className="How-To-container blue-grey lighten-3">
              <ul>
                <Card className="How-To-item item-one" horizontal><li>Copy URL</li></Card>
                <Card className="How-To-item item-two" horizontal><li>Paste URL</li></Card>
                <Card className="How-To-item item-three" horizontal><li>Adjust summary length</li>  </Card>        
                <Card className="How-To-item item-four" horizontal><li>process...</li></Card>
                <Card className="How-To-item item-five" horizontal><li>Done!</li></Card>
              </ul> 
            </CardPanel>
             <p>The only thing we cannot do for you is reading!</p>
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