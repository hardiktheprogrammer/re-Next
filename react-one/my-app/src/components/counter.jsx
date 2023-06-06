import react, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super(); // super method
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h3> Counting 1 {this.state.counter}</h3>
        <button> Click</button>
      </div>
    );
  }
}

export default Counter;
