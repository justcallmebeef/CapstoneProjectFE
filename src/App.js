import React, { Component } from 'react';
import asendWhite from './asend-white.png';
import './App.css';

const climberAPI = 'https://capstone-climb-db.herokuapp.com/climbers'

class App extends Component {
  render() {
    return (
      <img src={asendWhite} alt="logo" />
    );
  }
}

export default App;
