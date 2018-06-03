import React, { Component } from 'react';
import './App.css';

var image = require('./API/API');

class App extends Component {
  render() {
    return (
      <div className="photo">
      <img src = {image.getImgsrc} />
      </div>
    );
  };
};

export default App;
