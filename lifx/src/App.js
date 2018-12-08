import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor () {
    super();
    this.state = {
      data: 'notClicked'
    }
    this.clicking = this.clicking.bind(this);
  }

 clicking (e) {
   e.preventDefault();
   this.setState({ data: 'clicked'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.clicking}>Click here</button>
        <div>{this.state.data} </div>
      </div>
    );
  }
}

export default App;
