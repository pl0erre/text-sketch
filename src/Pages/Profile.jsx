import React, { Component } from 'react'
import MainLayout from '../Components/MainLayout';
import '../Css/Profile.css';
import {Link} from 'react-router-dom';

export default class Profile extends Component {

  render() {
    return (

      <MainLayout>
        <div className="App-Profile">
            
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
            
        </div>
      </MainLayout>
      
    )
  }
}
