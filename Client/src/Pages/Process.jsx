import React, { Component } from 'react'
import '../Css/Process.css';
import MainLayout from '../Components/MainLayout';

import axios from 'axios';
import qs from 'querystring';

export default class Process extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text_url: '',
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
}

handleFormChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleFormSubmit(event) {
  event.preventDefault(); //! deactivates default behaviour of html forms

  axios({
    method: "POST",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data:  qs.stringify(this.state), 
    url: `${process.env.REACT_APP_API}/?` //! needs to be adjusted
  })
  .then((res)=> {
      this.props.history.push('/collection')
  })
  .catch((err)=> {
      console.log(err)
  })
}

  render() {
    return (

      <MainLayout>
        <div className="App-Process">
          
          <div className="sidebar">
            <h2>Parameters</h2>
          </div>
          <div className="main-tab">
            <h2>Process a new text</h2>
            <form onClick={this.handleFormSubmit}>
              
              <input  type="url" 
                      name="text_url" 
                      placeholder="https://"
                      onChange={this.handleFormChange} />
                      
              <input  type="submit" 
                      name="submit" />
            </form>
          </div>
        </div>
      </MainLayout>
      
    )
  }
}
