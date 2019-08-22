// Basic
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../Css/Task.css';

// Components
import MainLayout from '../Components/MainLayout';
import {Card, CardPanel, Chip, TextInput, Range, Button} from 'react-materialize';

// Utils
import Save from "../Utils/Save";
import Process from "../Utils/Process";
const process = new Process();
const save = new Save();


export default class Task extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text_url: '',
      nr_sentences: '',
      text_processed: 'Your Processed Text goes here',
      languages: [],
      labels: [],
      text_name: '',
      error: null
    }

    this.handleProcessSubmit = this.handleProcessSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
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
    })
    .catch((err) => {
      this.setState({ error: err.message });
    });
  }

  handleSaveSubmit(event) {
    event.preventDefault();
    save.saveText(this.state.text_processed, 
                  this.state.languages, 
                  this.state.labels, 
                  this.state.text_name
    )
    .then(() => {
      this.props.history.push('/collection')
    })
    .catch((err) => {
      this.setState({ error: err.message })
    })
  }

  render() {
    return (

      <MainLayout>
        <CardPanel className="App-Task blue-grey lighten-3">
          <div className="left-bar">
            <Card className="">     
              <form className="process-form" name="process-form" onSubmit={this.handleProcessSubmit}>
                <TextInput  type="text" 
                            name="text_url" 
                            label="Enter URL"
                            onChange={this.handleFormChange}
                            value={this.state.text_url} />
                <label  htmlFor="nr_sentences"
                        className="teal-text">Number of sentences</label>
                <Range  name="nr_sentences"
                        min="1"
                        max="20"
                        onChange={this.handleFormChange}
                        value={this.state.nr_sentences} />
                <Button type="submit" 
                        name="submit"
                        className="lime teal-text text-darken-3">Process text</Button>
              </form>
            </Card>
            <Card>

              <div className="labels">
                {this.state.labels.map((label) =>
                  <div className="label-item">
                    <Chip><img src="/tag-icon.png" alt="tag-icon"/>{label.label} <span className="orange-text text-darken-4">{label.relevance}</span></Chip>
                  </div>
                )}
              </div>

              <div className="languages">
                {this.state.languages.map((language) => 
                  <div className="language-item">
                    <Chip><img src="/lang-icon-2.png" alt="lang-icon"/>{language.name} <span className="orange-text text-darken-4">{language.relevance}</span></Chip>
                  </div>
                )}
              </div>

            </Card>
          
            <Card>
              <h3>Add to collection</h3>
              <form className="save-form" name="save-form" onSubmit={this.handleSaveSubmit}>
                <TextInput  type="text" 
                        name="text_name"
                        label="Name"
                        onChange={this.handleFormChange}
                        value={this.state.text_name} />
                <Button type="submit" 
                        name="submit"
                        className="lime teal-text text-darken-3">Save</Button>
              </form>
            </Card>
          
          </div> 
          
          
          <div className="right-bar">
            <Card className="process-info">
              <h3>Instructions</h3>
              <p className="process-description">
                Copy the Url of the website you want to summarize.
                Enter this Url and select the length of the summary being generated.
                Hit "Process" and wait for the analysis being completed.
                The result will be displayed below. 
                This inncluding the classifications as well as the detected language with their relevances in percentage.
              </p>
            </Card> 

            <Card className="bottom-left">
              <p name="text_processed" className="text_processed teal-text text-darken-3  " >
                {this.state.text_processed}
              </p>
            </Card>
          </div>
        </CardPanel>
      </MainLayout>
      
    )
  }
}
