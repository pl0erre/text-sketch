// Basic
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Css/Login.css';

// Components
import HomeLayout from '../Components/HomeLayout';
import {TextInput, Button, Card} from 'react-materialize';

// Utils
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
      this.props.history.push('/info')
    })
    .catch((err) => {
      this.setState({ error: err.message });
    });
  }

  render() {
    return (

      <HomeLayout>
        <div className="App-Login" >
          <h2 className="grey-text text-darken-2">Login</h2>
          <Card>
            <form onSubmit={this.handleFormSubmit}>
              <TextInput  type="text" 
                          name="username"
                          label="Username"
                          required
                          autoFocus
                          onChange={this.handleFormChange} 
                          value={this.state.username} />

              <TextInput  type="password" 
                          name="password" 
                          label="Password"
                          required
                          onChange={this.handleFormChange}
                          value={this.state.password} />

              <Button     type="submit" 
                          name="submit"
                          className="Submit-btn lime  grey-text text-darken-3">Login</Button>
            </form>
          </Card>
          <Link to="/signup">Signup</Link>
        </div>
      </HomeLayout>

    )
  }
}
