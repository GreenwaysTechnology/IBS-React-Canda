import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

//container
const Counter = props => {
    const [counter, setCounter] = useState(props.init);
    function onIncrement() {
        setCounter(prevState => {
            console.log(`Previouse State ${prevState}`)
            return prevState + 1
        })
    }
    return <div className="container">
        <CounterView counter={counter} onIncrement={onIncrement} />
    </div>
}
//presentational component
const CounterView = props => <div>
    <h1>Counter Application</h1>
    <h3>Counter : {props.counter}</h3>
    <button className="btn btn-success" onClick={props.onIncrement} >+</button>
</div>


const Application = () => <div>
    <Counter init={100} />
</div>

ReactDOM.render(<Application />, document.getElementById('root'));