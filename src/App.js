import React, { Component } from 'react';
import './App.css';
import Mod from './modules/Mod.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mod data={data} />
      </div>
    );
  }
}

let data = {
  imgs : ['cat1', 'cat2', 'cat3', 'cat4','cat2','cat2','cat2','cat2']

}

export default App;
