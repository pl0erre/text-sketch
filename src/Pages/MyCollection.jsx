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
        <h2 className="blue-grey-text text-darken-2">My Collection</h2>
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
                <div className="labels">
                  {text.labels.map((label) =>
                    <div className="label-item">
                      <Chip><img src="/tag-icon.png" alt="tag-icon"/>{label.label} <span className="orange-text text-darken-4">{label.relevance}</span></Chip>
                    </div>
                  )}
                </div>

                <div className="languages">
                  {text.languages.map((language) => 
                    <div className="language-item">
                      <Chip><img src="/lang-icon-2.png" alt="lang-icon"/>{language.name} <span className="orange-text text-darken-4">{language.relevance}</span></Chip>
                    </div>
                  )}
                </div>
          </Card>   
        )}
      </MainLayout>
    )
  }
}
