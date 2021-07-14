import React from 'react';
import ReactDOM from 'react-dom';

//imperative 
const Heading = () => React.createElement(
    'h1',
    null,
    'Hello React!!!!'
);

ReactDOM.render(<Heading/>, document.getElementById('root'))