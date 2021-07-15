//React +Redux
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
/////////////////////////////////////////////////////////////////////////////////
//Step: 1 redux

const counterReducer = (counter = 10, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //return new state
            return counter + 1;
        default:
            //must return default state
            return counter;
    }
}
//store create
const store = createStore(counterReducer);

/////////////////////////////////////////////////////////////////////////////////
//React + Redux Binding Layer
//mapper function : converts redux state into react prop:Redux state(data ) as prop

function mapStateToProp(counter) {
    //mapper object
    //key-react prop,value is redux state
    return {
        counter: counter
    }
}

////////////////////////////////////////////////////////////////////////////////
//React

const incrementAction = {
    type: 'INCREMENT'
}

const Counter = props => {
    function onIncrement() {
        //fire biz logic
        props.dispatch(incrementAction)
    }
    return <div>
        <h1>React - Redux - Counter App</h1>
        <h2>Counter {props.counter}</h2>
        <button className="btn btn-success" onClick={onIncrement} >+</button>
    </div>
}
//Container Components/Smart Componets //Higher Order Components

const CounterContainer = connect(mapStateToProp)(Counter);


const App = () => <div className="container">
    <Provider store={store} >
        <CounterContainer />
    </Provider>
</div>
ReactDOM.render(<App />, document.getElementById('root'))
