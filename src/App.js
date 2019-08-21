// BASIC
import React, {Component} from 'react';
import './Css/App.css';
import {Route} from 'react-router-dom';

// PAGES
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Info from './Pages/Info';
import Profile from './Pages/Profile';
import Task from './Pages/Task';
import MyCollection from './Pages/MyCollection';
import Details from './Pages/Details';

// COMPONENTS
import ProtectedRoute from './Components/ProtectedRoute';
import Logout from './Components/Logout';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRobot, faBook, faListUl, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
library.add(faRobot, faBook, faListUl, faGlobeEurope);


export default class App extends Component {

  render(){

    return (
      <div className="App">
        <Route exact path="/" component={Home}                  />
        <Route exact path="/login" component={Login}            />
        <Route exact path="/signup" component={Signup}          />
        
        <ProtectedRoute
          redirectUrl='/login'
          path='/info'
          component={Info}        />

        <ProtectedRoute 
          redirectUrl='/login'
          path='/collection'
          component={MyCollection}  />

        <ProtectedRoute 
          redirectUrl='/login'
          path='/task'
          component={Task}     />

        <ProtectedRoute 
          redirectUrl='/login'
          path='/profile'
          component={Profile}     />

        <ProtectedRoute 
          redirectUrl='/login'
          path="/auth/logout" 
          component={Logout}      />
          
        <ProtectedRoute 
          redirectUrl='/login'
          path="/details/:id" 
          component={Details}      />
          
      </div>
    );
  }
}
