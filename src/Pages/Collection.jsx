import React, { Component } from 'react';
import MainLayout from '../Components/MainLayout';
import '../Css/Collection.css';

export default class Collection extends Component {
  render() {
    return (
      <MainLayout>
        <div className="App-Collection">
          <h2>My Collection</h2>
        </div>
      </MainLayout>
    )
  }
}
