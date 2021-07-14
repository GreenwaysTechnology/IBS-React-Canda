import React from 'react';
import ReactDOM from 'react-dom';

//create component
const Heading = <h1>Hello React!!!</h1>

console.log(Heading);
//Rendering:Flushing the VDOM into Javascript Engine
ReactDOM.render(Heading, document.getElementById('root'))

