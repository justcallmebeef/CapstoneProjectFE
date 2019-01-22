import React, { Component } from 'react';
import asendWhite from './asend-white.png';
import './App.css';

const climberAPI = 'https://capstone-climb-db.herokuapp.com/climbers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={asendWhite} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
