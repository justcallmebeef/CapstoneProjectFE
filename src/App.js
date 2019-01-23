import React, { Component, Fragment } from 'react'
import asendWhite from './small-asend-white.png'
import { Route, Link } from 'react-router-dom'
import Welcome from './components/Welcome'
import './App.css';

const climberAPI = 'https://capstone-climb-db.herokuapp.com/climbers'
const routesAPI = 'https://capstone-climb-db.herokuapp.com/routes'

class App extends Component {
  render() {
    return (
      <Fragment>
      <Welcome />
      </Fragment>
    );
  }
}

export default App;
