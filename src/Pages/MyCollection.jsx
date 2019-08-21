// Basic
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Css/MyCollection.css';

// Components
import MainLayout from '../Components/MainLayout';

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
        <h2>My Collection</h2>
        {this.state.collection.map((text) => 
          <div className="collection-item" key={text._id}>
            <Link collection={this.state.collection} 
                  to={{ pathname: `/details/` + text._id,
                        state: {...text}}}> 
              <h4>{text.text_name}</h4> 
            </Link> 
            {text.labels.map((label) => <h5>{label.label}</h5>)}
            {text.languages.map((language) => <h5>{language.name}</h5>)}
          </div>   
        )}
      </MainLayout>
    )
  }
}


// <Link 
//           beers={this.props.beers} 
//           to={{ pathname: "/details/" + this.props.beer._id, 
//                 state: {beer: this.props.beer}}}>
//           Details
//         </Link>