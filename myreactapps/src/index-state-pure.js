import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends React.Component {

    //state :data of component/data of ui
    state = {
        count: 0
    };

    //listener
    onIncrement = () => {
        //biz logic : state mutation
        //
        // this.setState(function (oldState) {
        //     console.log('(PreviousState) OldState', oldState)
        //     //return new state
        //     return {
        //         count: oldState.count + 1
        //     }
        // });
        // this.setState(oldState => {
        //     console.log('(PreviousState) OldState', oldState)
        //     //return new state
        //     return Object.assign({}, oldState, { count: oldState.count + 1 })
        // });
        this.setState(oldState => {
            console.log('(PreviousState) OldState', oldState)
            //return new state
            return { ...oldState, count: oldState.count + 1 }
        });
    }

    render() {
        console.log('(Current State) New State', this.state)

        return <div className="container">
            <h1>Dynamic UI -State Mutatations</h1>
            <h2>Counter {this.state.count}</h2>
            <button className="btn btn-success" onClick={this.onIncrement}>+</button>
            <button className="btn btn-success" onClick={() => {
                this.setState(oldState => {
                    return { ...oldState, count: oldState.count - 1 }
                })
            }}>-</button>

        </div>
    }
}
const App = () => <Counter />

ReactDOM.render(<App />, document.getElementById('root'));