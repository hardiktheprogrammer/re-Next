import { Component } from 'react';

class Form extends Component {
  state = {
    firstname: '',
  };
  handleChange = (event) => {
    this.setState({
      fistname: event.target.value,
    });

    console.log(this.state.fistname);
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
