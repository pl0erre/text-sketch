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
import Process from './Pages/Process';
import Collection from './Pages/Collection';

// COMPONENTS
import ProtectedRoute from './Components/ProtectedRoute';
import Logout from './Components/Logout';

export default class App extends Component {

  render(){

    return (
      <div className="App">
        <Route exact path="/" component={Home}                  />
        <Route exact path="/login" component={Login}            />
        <Route exact path="/signup" component={Signup}          />
        <Route exact path="/info" component={Info}              />
        <Route exact path="/profile" component={Profile}        />
        <Route exact path="/process" component={Process}        />
        <Route exact path="/collection" component={Collection}  />
        
        <ProtectedRoute 
          redirectUrl='/auth/login'
          path="/auth/logout" 
          component={Logout} />
          
      </div>
    );
  }
}
