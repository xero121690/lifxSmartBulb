import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor () {
    super();
    this.state = {
      data: 'notClicked',
      token: 'ca7e91738aa005a4e52284973258a07c13a64d6714e3d0e7d458f0891c025223',
      API: '',
      dataToSend: {
        period: 0,
        cycles: 0,
        color: 'purple',
      },
      colors: 'blue',
      periods: 0,
      cycles: 0,

    }
    this.clicking = this.clicking.bind(this);
    this.breath = this.breath.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 clicking (e) {
   e.preventDefault();
   this.setState({ data: 'clicked'});
   fetch('https://api.lifx.com/v1/lights/all/effects/breathe', {
   method: 'POST', 
   body: JSON.stringify(this.state.dataToSend),
   headers: new Headers({
     'Authorization': `Bearer ${this.state.token}`,
     'Content-Type': 'application/json'
   }),
  })
    .then((response) => response)
    .then((responseJson) => {
      // return responseJson.movies;
      console.log(responseJson);
      return 
    })
    .catch((error) => {
      console.error(error);
    });

  }

  breath () {
    let dataBreath =  {
      period: this.state.periods,
      cycles: this.state.cycles,
      color: this.state.colors,
    };
    fetch('https://api.lifx.com/v1/lights/all/effects/breathe', {
    method: 'POST', 
    body: JSON.stringify(dataBreath),
    headers: new Headers({
      'Authorization': `Bearer ${this.state.token}`,
      'Content-Type': 'application/json'
    }),
   })
     .then((response) => response)
     .then((responseJson) => {
       // return responseJson.movies;
       console.log(responseJson);
       return 
     })
     .catch((error) => {
       console.error(error);
     });
   }

   handleChange(event) {
     console.log('name: ', event.target)
     let whereToSend = event.target.value;
     this.setState({ [whereToSend]: event.target.value });
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to LIFX Control</h1>
        </header>
        <p className="App-intro">
          To get started, head on over to the LIFX tab.
        </p>
        {/* breathing options here */}
        <div id="breath" >
          <label>Breathing</label>
          <br/>
          <label> Choose color: </label>
          <select value={this.state.colors} onChange={this.handleChange}>
            <option value="blue" name="colors">Blue</option>
            <option value="green"  name="colors">Green</option>
            <option value="purple"  name="colors">Purple</option>
            <option value="red"  name="colors">Red</option>
          </select>
          <br/>
          <label> Cycles: </label>
          <select value={this.state.cycles} onChange={this.handleChange}>
            <option value={1} name="cycles">1</option>
            <option value={2} name="cycles">2</option>
            <option value={3} name="cycles">3</option>
            <option value={4} name="cycles">4</option>
            <option value={5} name="cycles">5</option>
            <option value={6} name="cycles">6</option>
            <option value={7} name="cycles">7</option>
            <option value={8} name="cycles">8</option>
            <option value={9} name="cycles">9</option>
          </select>
          <br/>
          <label> Periods: </label>
          <select value={this.state.periods} onChange={this.handleChange}>
            <option value={1} name="periods">1</option>
            <option value={2} name="periods">2</option>
            <option value={3} name="periods">3</option>
            <option value={4} name="periods">4</option>
            <option value={5} name="periods">5</option>
            <option value={6} name="periods">6</option>
            <option value={7} name="periods">7</option>
            <option value={8} name="periods">8</option>
            <option value={9} name="periods">9</option>
          </select>
          <br />
          <button onClick={this.breath}>Breath</button>
          {/* you can do a button onClick hit the API */}
          {/* creating a line */}
          <hr/>
   
        </div>




        <button onClick={this.clicking}>Turn off the lights</button>
        <div>{this.state.data} </div>
      </div>
    );
  }
}

export default App;
