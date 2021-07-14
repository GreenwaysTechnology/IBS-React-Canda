import React from 'react';
import ReactDOM from 'react-dom';


/**
//create component;variable pattern
const Heading = <h1>Hello React!!!</h1>
ReactDOM.render(Heading, document.getElementById('root'))
 */
//function pattern

// function Heading() {
//     return <h1>Hello React!!</h1>
// }
// const Heading = () => {
//     return <h1>Hello React!!</h1>
// }

//const Heading = () => <h1>Hello React!!</h1>

//Imperative way of calling Component function: not recommend
// ReactDOM.render(Heading(), document.getElementById('root'))

//Declartive: Tag based
//ReactDOM.render(<Heading></Heading>, document.getElementById('root'))

class Heading extends React.Component {

    render() {
        return <h1>Hello React!!</h1>
    }
}
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))