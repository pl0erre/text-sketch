// Basic
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Css/MyCollection.css';

// Components
import MainLayout from '../Components/MainLayout';
import {Chip} from 'react-materialize';
import {Card} from 'react-materialize';

// Utils
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
        <h2 className="blue-grey-text text-lighten-5">My Collection</h2>
        {this.state.collection.map((text) => 
          <Card className="collection-item hoverable blue-grey lighten-3" 
                key={text._id}
                title={text.text_name}
                actions={[
                  <Link collection={this.state.collection} 
                        to={{ pathname: `/details/` + text._id,state: {...text}}}>
                          <a href="/"><span className="teal-text text-darken-3">Details</span></a>
                  </Link> 
                  
                ]}>
            
            {text.labels.map((label) => <Chip>{label.label}</Chip>)}
            {text.languages.map((language) => <Chip>{language.name}</Chip>)}
          </Card>   
        )}
      </MainLayout>
    )
  }
}
