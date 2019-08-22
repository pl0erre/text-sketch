// Basic
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Css/Details.css';

// Components
import MainLayout from '../Components/MainLayout';
import {Card, CardPanel, Chip, Button} from 'react-materialize';

// Utils
import Collection from "../Utils/Collection";
const collection = new Collection();
require('dotenv').config();


export default class Details extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      error: null
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    event.preventDefault(); 
    collection.deleteText(this.props.location.state._id)
    .then(() => {
      debugger
      this.props.history.push('/collection')
    })
    .catch((err) => {
      this.setState({ error: err.message })
    })
  }

  render() {

    return (
      <MainLayout>
        <CardPanel className="App-Details">
          <Card className="details-info">
            <h3>{this.props.location.state.text_name}</h3>
            <p>{this.props.location.state.text_processed}</p>
          </Card>
          <Card>

            <div className="labels">
              {this.props.location.state.labels.map((label) =>
                <div className="label-item">
                  <Chip><img src="/tag-icon.png" alt="tag-icon"/>{label.label} <span className="orange-text text-darken-4">{label.relevance}</span></Chip>
                </div>
              )}
            </div>

            <div className="languages">
              {this.props.location.state.languages.map((language) => 
                <div className="language-item">
                  <Chip><img src="/lang-icon-2.png" alt="lang-icon"/>{language.name} <span className="orange-text text-darken-4">{language.relevance}</span></Chip>
                </div>
              )}
            </div>
          </Card>
          <Card>
            <form className="delete-form" 
              name="delete-form"
              onSubmit={this.handleDelete}>

              <Button  type="submit"
                      name="submit"
                      className="deep-orange darken-4">Delete</Button>
            </form>
          </Card>
          <Button waves="light" node="a" href="/collection">Collection</Button>
        </CardPanel>
      </MainLayout>
      
    )
  }
}



