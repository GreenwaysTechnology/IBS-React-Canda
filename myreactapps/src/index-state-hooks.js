import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


class CounterComponent extends React.Component {
    state = {
        counter: 0 // inital value
    };

    //Listener method
    onIncrement = () => {
        let counter = this.state.counter + 1;
        this.setState({ counter });

    }

    render() {
        console.log('render method is called', this.state.counter);
        return <div className="container">
            <h1>Counter Application -Using Class</h1>
            <h3>Counter : {this.state.counter}</h3>
            <button className="btn btn-success" onClick={this.onIncrement}>+</button>
        </div>
    }
}

const Counter = props => {
    //state counter is state variable
    //setCounter ===> setState
    const [counter, setCounter] = useState(props.init);
    function onIncrement() {
        //  setCounter(counter + 1)
        setCounter(prevState => {
            console.log(`Previouse State ${prevState}`)
            return prevState + 1
        })
    }
    return <div className="container">
        <h1>Counter Application-Using Hooks</h1>
        <h3>Counter : {counter}</h3>
        <button className="btn btn-success" onClick={onIncrement} >+</button>
        <button className="btn btn-success" onClick={() => {
            setCounter(counter - 1)
        }} >-</button>

    </div>
}


const Application = () => <div>
    <CounterComponent />
    <hr />
    <Counter init={100} />
</div>

ReactDOM.render(<Application />, document.getElementById('root'));