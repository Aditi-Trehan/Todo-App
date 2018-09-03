import React, { Component } from 'react';
import './App.css';
import Text from './Text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO APP</h1>
        </header>
        <div>
          <Text/>
        </div>
      </div>
    );
  }
}

export default App;
