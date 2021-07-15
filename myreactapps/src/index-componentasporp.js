import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Header, Logo } from './header'
import logo from './logo.svg'


const PlaceHolder = props => <div>
        {
            props.children
        }
</div>

const Text = ()=><h1>Greet</h1>
const Image = () => <img className="App-logo" src={logo} />

const App = () => <div className="container">
   <Header/>
   <Logo/>
   <PlaceHolder>
        <Text/>
        <Image/>
   </PlaceHolder>
</div>

ReactDOM.render(<App />, document.getElementById('root'))