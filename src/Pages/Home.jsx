// Basic
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Css/Home.css';

// Components
import HomeLayout from '../Components/HomeLayout';
import {Button} from 'react-materialize';

export default class Home extends Component {
  render() {
    return (

      <HomeLayout>
        <div className="App-Home">
          <h1 className="grey-text text-darken-2">Welcome to Text Sketch</h1>
          <Button className="btn-large lime teal-text text-darken-3 pulse" node="a" href="/login">Get started</Button>
          {/* <Link to="/login">Login</Link> */}
        </div>
      </HomeLayout> 
      
    )
  }
}
