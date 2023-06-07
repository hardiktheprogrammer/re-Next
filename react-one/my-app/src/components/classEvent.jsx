import { Component } from 'react';
class ClassEvent extends Component {
  handleClick() {
    console.log('class based Components');
  }
  render() {
    return (
      <div>
        this is the time
        <button onClick={this.handleClick}> Chose Me</button>
      </div>
    );
  }
}
export default ClassEvent;
