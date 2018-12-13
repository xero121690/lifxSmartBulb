import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const slider = {

  width: 400,
  justifyContent: 'center', 
alignItems: 'center',
display: 'inline-block',
  };

  const divOuter = {
 
    justifyContent: 'center', 
  alignItems: 'center' 
    };


class App extends Component {

  constructor () {
    super();
    this.state = {
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
      value: 0.5,

    }
    this.onOff = this.onOff.bind(this);
    this.breath = this.breath.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.setTheState = this.setTheState.bind(this);
  }

 onOff (e) {
   fetch('https://api.lifx.com/v1/lights/all/toggle', {
   method: 'POST', 
   headers: new Headers({
     'Authorization': `Bearer ${this.state.token}`,
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
      period: Number(this.state.periods),
      cycles: Number(this.state.cycles),
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

   setTheState () {
    let dataState =  {
      brightness: this.state.value,
      fast: false
  }
    fetch('https://api.lifx.com/v1/lights/label:Lamp/state', {
    method: 'PUT', 
    body: JSON.stringify(dataState),
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






   handleChange = (name) => (event) => {
     this.setState({ [name]: event.target.value });
   }

   handleSlider = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;


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
          <select value={this.state.colors} onChange={this.handleChange('colors')}>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="red">Red</option>
          </select>
          <br/>
          <label> Cycles: </label>
          <select value={this.state.cycles} onChange={this.handleChange('cycles')}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>
          <br/>
          <label> Periods: </label>
          <select value={this.state.periods} onChange={this.handleChange('periods')}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>
          <br />
          <button onClick={this.breath}>Breath</button>
          {/* you can do a button onClick hit the API */}
          {/* creating a line */}
          <hr/>
   
        </div>
        <div id="power">
          <label>Toggle Power: </label>
          <br />
          <button onClick={this.onOff}>Turn On/Off</button>
        </div>
        <hr />

     
        <div id="power" style={divOuter}>
          <label>Slider: </label>
          <br />
          <div style={slider}>
        <Typography id="label">Brightness</Typography>
        <div style={slider}> 
        <Slider
          value={value}
          aria-labelledby="label"
          onChange={this.handleSlider}
          min={0.0}
          max={1.0}
          step={.1}
        />
        <br />
          <button onClick={this.setTheState}>Set The State</button>
        </div>
       
      </div>
        </div>
        <hr />
      </div>   
    );
  }
}

export default App;
