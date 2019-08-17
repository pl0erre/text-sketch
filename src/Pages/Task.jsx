import React, { Component } from 'react'
import '../Css/Task.css';
import MainLayout from '../Components/MainLayout';
import {Link} from 'react-router-dom';

import Process from "../Utils/Process";
const process = new Process();

export default class Task extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text_url: '',
      nr_sentences: '',
      text_processed: '',
      labels: ["label1", "label2", "label3", "label4"],
      error: null
    }

    this.handleProcessSubmit = this.handleProcessSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
}

handleFormChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleProcessSubmit(event) {
  event.preventDefault(); 
  process.getResult(this.state.text_url, this.state.nr_sentences)
  .then((res) => {
    this.setState({text_processed: res.data.summary})
    //! get tags from Process.js
  })
  .catch((err) => {
    this.setState({ error: err.message });
  });
}

  render() {
    return (

      <MainLayout>
        <div className="App-Task">
          
          <div className="top-bar">
            <h2>Process a new text</h2>
            <form name="process-form" onSubmit={this.handleProcessSubmit}>
              <input  type="text" 
                      name="text_url" 
                      placeholder="http://"
                      onChange={this.handleFormChange}
                      value={this.state.text_url} />
              <input  type="number"
                      name="nr_sentences"
                      placeholder="Number of sentences"
                      onChange={this.handleFormChange}
                      value={this.state.nr_sentences} />
              <button type="submit" 
                      name="submit"
                      className="Submit-btn">Process text</button>
            </form>
          </div>
          <div className="bottom-bar">
            
            <div className="bottom-left">
              <p name="text_processed" placeholder="Your result" >
                {this.state.text_processed}
              </p>
            </div>

            <div className="bottom-middle"> 
              <h3>Categories</h3>
              <div className="label-container">
                {this.state.labels.map((label) =>
                  <h4>{label}</h4>
                )}
              </div>
              
            </div>

            <div className="bottom-right">
              <h3>Save in collection</h3>
              <form name="save-form">
                <input  type="text" 
                        name="save-name" />
                <button type="submit" 
                        name="submit"
                        placeholder=""
                        className="Submit-btn">Save</button>
              </form>
              <Link to="/collection">My collection</Link>
            </div>
            
          </div>
        </div>
      </MainLayout>
      
    )
  }
}
