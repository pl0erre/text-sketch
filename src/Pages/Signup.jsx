import React, { Component } from 'react';
import HomeLayout from '../Components/HomeLayout';
import '../Css/Signup.css';
import {Link} from 'react-router-dom';

import Auth from "../Utils/Auth";
const auth = new Auth();

export default class Signup extends Component {

  constructor() {
    super();
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        password_repeat: ""
      },
      error: null
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if(this.password !== this.password_repeat) {
      alert("Passwords don't match");
    } else {
      auth.signup(this.state.user)
      .then(() => {
        this.setState({ error: "" });
        this.props.history.push("/login");
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
    }
    
  };

  handleFormChange(event) {
    let user = this.state.user
    user[event.target.name]= event.target.value
    this.setState({
      user: user
    });
  }

  render() {
    return (

      <HomeLayout>
        <div className="App-Signup">
        <h2>Signup to get started</h2>
          <form onSubmit={this.handleFormSubmit}>

            <input  type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={this.state.user.username}
                    onChange={this.handleFormChange} />

            <input  type="email" 
                    name="email" 
                    placeholder="E-Mail"
                    value={this.state.user.email}
                    onChange={this.handleFormChange} />

            <input  type="password" 
                    name="password" 
                    placeholder="Password"
                    value={this.state.user.password}
                    onChange={this.handleFormChange} />

            <input  type="password" 
                    name="password_repeat" 
                    placeholder="Repeat Password"
                    value={this.state.user.password_repeat}
                    onChange={this.handleFormChange} />

            <input  type="submit" 
                    name="submit"
                    className="Submit-btn" />
                    
          </form>
          <Link to="/login" type="button">Login</Link>
        </div> 
      </HomeLayout>
      
    )
  }
}
