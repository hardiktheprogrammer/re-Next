import { Component } from 'react';

class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
  };
  handleChange = (event) => {
    this.setState({
      fistname: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  render() {
    return (
      <div>
        form
        <form>
          <input onChange={this.handleChange} type="text" value="Fistlie" />
          <input value={this.state.lastname} type="text" onChange={this.handleLastNameChange} />
        </form>
      </div>
    );
  }
}
export default Form;
