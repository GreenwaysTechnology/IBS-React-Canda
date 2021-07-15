import ReactDOM from 'react-dom'
import React from 'react';
import { Header, Logo } from './header'
import { Footer } from './footer';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import { Posts } from './main/post'
import { TodoApp } from './main/todoApp'
import { store } from './main/counterredux'
import { CounterContainer } from './main/counterredux'

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home = props => <h1>Home Page</h1>


const App = () => <div className="container">
    <Provider store={store}>
        <Header />
        <Logo />
        <hr />
        <BrowserRouter>
            {/**Master Menu */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">CounterRedux</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/todoapp">TodoApp</Link></li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/counter">
                    <CounterContainer />
                </Route>
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="/todoapp">
                    <TodoApp />
                </Route>
            </Switch>
        </BrowserRouter>
    </Provider>

</div>


ReactDOM.render(<App />, document.getElementById('root'))