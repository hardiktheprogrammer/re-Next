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

    console.log(this.state.fistname);
  };
  render() {
    return (
      <div>
        form
        <form>
          <input onChange={this.handleChange} type="text" value="Fistlie"></input>
          <input value={this.state.lastname} type="text" onChange={this.handleLastNameChange}></input>
        </form>
      </div>
    );
  }
}
export default Form;
