import React, { Component } from 'react';
import asendWhite from './asend-white.png';
import { Route, Link } from 'react-router-dom'
import './App.css';

const climberAPI = 'https://capstone-climb-db.herokuapp.com/climbers'
const routesAPI = 'https://capstone-climb-db.herokuapp.com/routes'

class App extends Component {
  render() {
    return (
      <img src={asendWhite} alt="logo" />
    );
  }
}

export default App;
