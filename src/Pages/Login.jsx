import React, { Component } from 'react';
import HomeLayout from '../Components/HomeLayout';
import '../Css/Login.css';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (

      <HomeLayout>
        <div className="App-Login">
          <Link to="/signup" type="button">Signup</Link>
        </div>
      </HomeLayout>

    )
  }
}
