// Basic
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Css/Signup.css';

// Components
import HomeLayout from '../Components/HomeLayout';
import {Card, TextInput, Button} from 'react-materialize';

// Utils
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
      formError: {
        email: "",
        password: "",
        passord_repeat: ""
      },
      emailValid: false,
      passwordValid: false,
      password_reapeatValid: false,
      formValid: false,
      serverError: null,
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
        this.setState({ serverError: "" });
        this.props.history.push("/login");
      })
      .catch((err) => {
        this.setState({ serverError: err.message });
        this.displayErr();
        debugger
      });
    }
  };

  displayErr() {
    let message = document.getElementsByClassName("errorMessage")[0];
    message.style.display = "flex";
  }

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
        <h2 className="grey-text text-darken-2">Signup to get started</h2>
        <Card>
          <form onSubmit={this.handleFormSubmit}>
            <TextInput  type="text" 
                    name="username" 
                    label="Username" 
                    required
                    value={this.state.user.username}
                    onChange={this.handleFormChange} />

            <TextInput type="email" 
                    name="email" 
                    label="E-Mail"
                    required
                    value={this.state.user.email}
                    onChange={this.handleFormChange} />

            <TextInput  type="password" 
                    name="password" 
                    label="Password"
                    required
                    value={this.state.user.password}
                    onChange={this.handleFormChange} />

            <TextInput  type="password" 
                    name="password_repeat" 
                    label="Repeat Password"
                    value={this.state.user.password_repeat}
                    onChange={this.handleFormChange} />

            <Button type="submit" 
                    name="submit"
                    className="Submit-btn lime  grey-text text-darken-3">Go for it!</Button>      
          </form>
        </Card>
        <Link to="/login">Login</Link>
        <div>
          {this.state.formError.forEach((key) => 
            <p>{key}</p> 
          )}
        </div>
        </div> 
      </HomeLayout>
      
    )
  }
}
