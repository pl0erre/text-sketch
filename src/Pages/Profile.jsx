// Basic
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../Css/Profile.css';

// Components
import MainLayout from '../Components/MainLayout';


export default class Profile extends Component {

  render() {
    return (

      <MainLayout>
        <div className="profile-info">
          <img src="/UserIcon.png" alt="user-icon"/>
          <p>E-Mail: ...</p>
          <p>Username: ...</p>
          <p>Change password</p>
        </div>
        <div>
          <Link to="/collection">My Collection</Link>
          <Link to="/auth/logout">Logout</Link>
        </div>
      </MainLayout>
      
    )
  }
}
