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
      languages: [],
      labels: [],
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
    this.setState({
      text_processed:     res.data.summary, 
      languages:          res.data.language,
      labels:             res.data.classification
    })
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
            <form className="process-form" name="process-form" onSubmit={this.handleProcessSubmit}>
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
            <p className="process-description"> 
            </p> 
            <div className="placeholder-div"></div>
          </div>

          <div className="bottom-bar">
            <div className="bottom-left">
              <p name="text_processed" placeholder="Your result" >
                {this.state.text_processed}
              </p>
            </div>
            <div className="bottom-middle">             
              <div className="labels">
                <h3>Classifications</h3>
                {this.state.labels.map((label) =>
                  <div className="label-item">
                    <h4>{label.label}</h4>
                    <h4>Relevance: {label.relevance}</h4>
                  </div>
                )}
              </div>
              <div className="languages">
                <h3>Languages: </h3>
                {this.state.languages.map((language) => 
                  <div className="language-item">
                    <h4>{language.name}</h4>
                    <h4>Relevance: {language.relevance}</h4>
                  </div>
                )}
              </div>
              
            </div>

            <div className="bottom-right">
              <h3>Save in collection</h3>
              <form className="save-form" name="save-form">
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
