import React, { Component } from 'react';
import MainLayout from '../Components/MainLayout';
import {Link} from 'react-router-dom';
import '../Css/MyCollection.css';
import Collection from "../Utils/Collection";
const collection = new Collection();
require('dotenv').config();



export default class MyCollection extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      error: null
    }
  }
  
  componentDidMount() {
    collection.getCollection()
    .then(res => {
      this.setState({collection: res.data})
    })
    .catch((error)=>{
      this.setState({error: error.message})
    })
  }

  render() {
    return (
      <MainLayout>
        <div className="App-Collection">
          <h2>My Collection</h2>
          <div className="collection-container">
            {this.state.collection.map((text) => 
              <div className="collection-item">
                <Link id={text._id} to={`/details/${text._id}`}> <h4>{text.text_name}</h4> </Link> 
                {text.labels.map((label) => <h5>{label.label}</h5>)}
                {text.languages.map((language) => <h5>{language.name}</h5>)}
              </div>   
            )}
          </div>
        </div>
      </MainLayout>
    )
  }
}