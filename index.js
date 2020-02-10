import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 5
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  increamentCount = () => {
    this.setState({
      count: this.state.count + +this.state.value
    })
  }

  decreamentCount = () => {
    this.setState({
      count: this.state.count - this.state.value
    })
  }

  resetCount = () => {
    this.setState({
      count: 0
    })
  }
  render() {
    let box = {
        backgroundColor:"#CCC",
        textAlign: 'center',
        padding: '30px',
        border: '2px solid #4D4D4F',
        fontSize: '18px',
        fontFamily: 'Verdana'
    }    
    return (      
      <div style={box}>
        <div>Count = {this.state.count}</div>
        <div>Value = {this.state.value}</div><br />
        <button onClick ={this.resetCount}>Reset the Count</button><br /> 
        <button onClick={this.increamentCount}>Increment By: +{this.state.value}</button> &nbsp;
        <button onClick={this.decreamentCount}>Decrement By: -{this.state.value}</button><br/><br />        
        <div><input type="number" value={this.state.value} onChange={this.handleChange}/></div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
