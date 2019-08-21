// Basic
import React, { Component } from 'react'
import '../Css/Info.css';

// Components
import MainLayout from '../Components/MainLayout';
import HowTo from '../Components/HowTo';
import Features from '../Components/Features';


export default class Info extends Component {
  
  render() {
    return (

      <MainLayout>
        <HowTo />
        <Features />
      </MainLayout>
      
    )
  }
}
