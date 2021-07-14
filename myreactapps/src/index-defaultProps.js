import React from 'react'
import ReactDOM from 'react-dom'
import { Logo, Header } from './header'
import { Footer } from './footer'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

//classes and props

// class Customer extends React.Component {
//     render() {
//         return <div>
//             <hr/>
//             <h1>{this.props.id} details</h1>
//             <h2>{this.props.name}</h2>
//         </div>
//     }
// }


const Customer = props => {
    return <div>
        <hr />
        <h1>{props.id} details</h1>
        <h2>{props.name}</h2>
    </div>
}
//default Props
Customer.defaultProps = {
    id: 0,
    name: 'Default Customer'
}

const App = () => <div className="container">
    <Header />
    <Logo />
    <Customer name="Make My Trip" id={1} />
    <Customer name="X Customer" id={2} />
    <Customer />

    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))