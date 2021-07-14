import React from 'react';
import ReactDOM from 'react-dom';

//create component
// const Heading = ()=> <h1>Hello React!!! 
const Heading = () => <div>
    <h1>Welcome to IBS</h1>
    <h2>Greetings</h2>
</div>

// ReactDOM.render(<Heading></Heading>, document.getElementById('root'))
ReactDOM.render(<Heading/>, document.getElementById('root'))

