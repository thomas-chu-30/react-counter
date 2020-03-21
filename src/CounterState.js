import React, { Component } from "react";
//原本是在一起的，但是分出去了，所以現在要引入
// import PropTypes from "prop-types";

class Counter extends Component {
  state = {
    count: 0
  };
  counter = () => {
    //這裡的setState是一個非同步的，所以沒有辦法一次加三次
    // this.setState({
    //   count: this.state.count + 1
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.setState(state => {
      return { count: state.count + 1 };
    });
    this.setState(state => {
      return { count: state.count + 1 };
    });
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };
  counterInitCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.counter}>+1{this.state.step}</button>
      </div>
    );
  }
}
export default Counter;
