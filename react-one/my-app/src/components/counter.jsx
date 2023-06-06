import {Component} from react 

class Counter extends Component {
    
    constructor(x) {

        super(); // super method 
        this.state = {
            counter: 0
        }
    }

    render() {
    return 
        <h3> Counting 1 {this.state }</h3>
        }
    
    
}

export default Counter;
