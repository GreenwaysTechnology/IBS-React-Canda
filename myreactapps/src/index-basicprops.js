import React from 'react'
import ReactDOM from 'react-dom'
import { Logo, Header } from './header'
import { Footer } from './footer'
import { Main } from './main'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'


const App = () => <div className="container">
    <Header />
    <Logo />
    <Main  />
    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))