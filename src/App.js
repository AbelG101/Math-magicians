import './App.css';

import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div className="calculator-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
