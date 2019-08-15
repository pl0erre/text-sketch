import React, { Component } from 'react';
import HomeLayout from '../Components/HomeLayout';
import '../Css/Home.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (

      <HomeLayout>
        <div className="App-Home">
          <h1>Welcome to Text Sketch</h1>
          <Link to="/login" type="button">Get started</Link>
        </div>
      </HomeLayout> 
      
    )
  }
}
