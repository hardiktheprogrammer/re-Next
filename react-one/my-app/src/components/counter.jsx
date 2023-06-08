import react, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super(); // super method
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (
      <div>
        <h3> Counting 1 {this.state.counter}</h3>
        <button onClick={() => this.increment}> Incremen</button>
      </div>
    );
  }
}

export default Counter;
