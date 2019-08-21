// Basic
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Css/Details.css';

// Components
import MainLayout from '../Components/MainLayout';

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
        <div>
          <h2>{this.props.location.state.text_name}</h2>
          <p>{this.props.location.state.text_processed}</p>
          {this.props.location.state.labels.map((label) => <h5>{label.label}</h5>)}
          {this.props.location.state.languages.map((language) => <h5>{language.name}</h5>)}
        </div>
        <form   className="delete-form" 
                name="delete-form"
                onSubmit={this.handleDelete}>

          <input  type="submit"
                  name="submit"
                  className="Submit-btn"></input>
        </form>
        <Link to="/collection">Collection</Link>
      </MainLayout>
      
    )
  }
}



