import React, { Component } from "react";
//原本是在一起的，但是分出去了，所以現在要引入
import PropTypes from "prop-types";

class Counter extends Component {
  //第二招iniCount
  //initCount也是可以寫在這裡
  // static defaultProps = {
  //   initCount: 30
  // };

  constructor(props) {
    //super就是在說這一個Component
    super(props);
    this.state = {
      count: props.initCount
    };
  }
  // state = {
  //   count: 0,
  //   step: 1
  // };
  counter = () => {
    this.setState({
      count: this.state.count + this.state.step,
      step: this.state.step + 1
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
        <button onClick={this.counter}>+step{this.state.step}</button>
        <button onClick={this.counterInitCount}>+1{this.state.step}</button>
      </div>
    );
  }
}
//第二之2招iniCount
//initCount也是可以寫在這裡  ,寫在外面的會壓到裡面的值
// Counter.defaultProps = {
//   initCount: 400
// };

//第三招 注意type
Counter.propTypes = {
  initCount: PropTypes.number
};
export default Counter;
