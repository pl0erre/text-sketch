import React, { Component } from 'react';
import HomeLayout from '../Components/HomeLayout';
import '../Css/Signup.css';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (

      <HomeLayout>
        <div className="App-Signup">
          <Link to="/login" type="button">Login</Link>
        </div> 
      </HomeLayout>
      
    )
  }
}
