import ReactDOM from 'react-dom';
import React from 'react';
import { TODOS } from './mock-data/todos';
import 'bootstrap/dist/css/bootstrap.css'

const NumberList = props => <div>
    <ul>
        {
            /* {
                props.list.map((item, index) => {
                    return <li key={index}>
                        {item}
                    </li>
                })
            } */
            props.list.map((item, index) => <li key={index}>{item}</li>)

        }

    </ul>
</div>

const TodoList = props => {
    return <div>
        <div className="card">
            {
                props.todos.map(todo =>
                    <div className="card-body">
                        <h5 class="card-title">{todo.id}</h5>
                        <p class="card-text">{todo.title}</p>
                </div>)
            }
        </div>
    </div>
}

const App = () => <div className="container">
    <h1>List Rendering</h1>
    <NumberList list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    <TodoList todos={TODOS} />
</div>

ReactDOM.render(<App />, document.getElementById('root'));