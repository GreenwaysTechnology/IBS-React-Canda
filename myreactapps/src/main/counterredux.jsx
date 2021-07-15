import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'

//steps: 1.write redux, 2.write binding logic 3. react render logic

//reducer: biz logic
const INCREMENT = 'INCREMENT'
const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        default:
            return state;
    }
}
//create 
export const store = createStore(CounterReducer)
//////////////////////////////////////////
//mapper function: convert redux state into react prop

const mapStateTop = state => {
    //left:Right 
    //reactProp:reduxState
    return {
        counter: state
    }
}
//////////////////////////////////////////////////////////////////////////////////
//React

const Counter = props => {

    const onIncrement = evt => {
        props.dispatch({ type: INCREMENT })
    }
    return <div>
        <h1>Value : {props.counter}</h1>
        <button className="btn btn-success" onClick={onIncrement}>Increment</button>
    </div>
}

//higher order component : you need merge redux + react

export const CounterContainer = connect(mapStateTop)(Counter)









