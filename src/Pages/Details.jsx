import React, { Component } from 'react';
import MainLayout from '../Components/MainLayout';
import '../Css/Details.css';
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
  }
  componentDidMount(this.props.id) { //! wroNKKKKK
    collection.getSingle()
    .then(res => {
      this.setState({details: res.data})
    })
    .catch((error)=>{
      this.setState({error: error.message})
    })
  }
  
  render() {

    return (
      <MainLayout>
        <div className="App-Details">
          {this.state.details.text_name} 
        </div>
      </MainLayout>
      
    )
  }
}
