import { Component } from 'react';

class Form extends Component {
  handleChange = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange} type="text" value="Fistlie"></input>
        </form>
      </div>
    );
  }
}
export default Form;
