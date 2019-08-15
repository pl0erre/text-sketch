import React, { Component } from 'react';
import '../Css/Logout.css';
import Nav from '../Components/Nav';

import Auth from "../Utils/Auth";
const auth = new Auth();


export default class Logout extends Component {
  
  constructor() {
    super();
    this.state = {
      error: null
    }
  }

  componentDidMount(){
    auth.logout()
    .then(()=> {
        this.props.history.push("/");
    })
    .catch((error)=> {
        this.setState({error: error.message});
    })
  }

  render() {
    return (
      <>
        <Nav />
        <div className="App-Logout">
          {this.state.error ? <h2>{this.state.error}</h2> : <img className="loading-gif" src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif" alt="loading_img" />}
        </div>
      </>
    )
  }
}
