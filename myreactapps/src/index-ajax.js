import ReactDOM from 'react-dom';
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


class Todo extends React.Component {
    state = {
        todos: []
    };

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        fetch(url)
            .then(payload => payload.json())
            .then(todos => {
                this.setState((oldState) => {
                    return {
                        todos: oldState.todos.concat(todos)
                    }
                })
            })
    }
    render() {
        return <div className="container">
            <h1>Todo App</h1>
            <ul>
                {
                    this.state.todos.map((todo, index) => {
                        return <li>
                            <span>{todo.title}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

const Posts = props => {
    const [posts, setPosts] = useState([]);
    //ajax calls -comonentDidMount
    useEffect(() => {
        const init = async () => {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url);
            const posts = await response.json();
            setPosts(posts);
        }
        init();

    })

    return <div><h1>Posts</h1>
        {
            posts.map(post => {
                return <div key={post.id}>
                    <h2>User Id :{post.userId} </h2>
                    <h3>{post.title} </h3>
                    <p>{post.body}</p>
                </div>
            })
        }
    </div>
}
const Application = () => <div className="container">
    {/* <Todo /> */}
    <Posts/>
</div>

ReactDOM.render(<Application />, document.getElementById('root'));