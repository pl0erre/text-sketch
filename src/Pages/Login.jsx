import React, { Component } from 'react';
import HomeLayout from '../Components/HomeLayout';
import '../Css/Login.css';
import {Link} from 'react-router-dom';

import Auth from "../Utils/Auth";
const auth = new Auth();


export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: null
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    auth.login(this.state.username, this.state.password)
    .then(() => {
      this.setState({ error: "" });
      this.props.history.push('/profile')
    })
    .catch((err) => {
      this.setState({ error: err.message });
    });
  }

  render() {
    return (

      <HomeLayout>
        <div className="App-Login" onSubmit={this.handleFormSubmit}>
          <h2>Login to start processing</h2>
          <form>

            <input  type="text" 
                    name="username" 
                    placeholder="Username"
                    onChange={this.handleFormChange} 
                    value={this.state.username} />

            <input  type="password" 
                    name="password" 
                    placeholder="Password"
                    onChange={this.handleFormChange}
                    value={this.state.password} />

            <input  type="submit" 
                    name="submit"
                    className="Submit-btn" />

          </form>
          <Link to="/signup" type="button">Signup</Link>
        </div>
      </HomeLayout>

    )
  }
}
