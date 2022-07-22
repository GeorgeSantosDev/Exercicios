import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super()

    this.state = {
      numberOfClicksOne: 0,
      numberOfClicksTwo: 0,
      numberOfClicksThree: 0,
    }

    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

  handleClickOne(event) {
    this.setState((estadoAnterior, _props) => ({
      numberOfClicksOne: estadoAnterior.numberOfClicksOne + 1
    }))
  };
  handleClickTwo() {
    this.setState((estadoAnterior, _props) => ({
      numberOfClicksTwo: estadoAnterior.numberOfClicksTwo + 1
    }))
  };

  handleClickThree() {
    this.setState((estadoAnterior, _props) => ({
      numberOfClicksThree: estadoAnterior.numberOfClicksThree + 1
    }))
  };

  changingColor(number) {
    return number % 2 === 0 ? 'green' : 'white'
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={this.handleClickOne}
          style={{color: this.changingColor(this.state.numberOfClicksOne)}}
        >{
            this.state.numberOfClicksOne}
        </button>
        <button onClick={this.handleClickTwo}>{this.state.numberOfClicksTwo}</button>
        <button onClick={this.handleClickThree}>{this.state.numberOfClicksThree}</button>
      </div>
    );
  }
}

export default App;
