import React from 'react';
import ReactDOM from 'react-dom';

//header
const Header = () => <nav>
    <h1>IBS</h1>
</nav>

const Main = () => <div>
    <p>The travel industry is undergoing significant transformation driven by increased travel volumes, evolving consumer expectations and heightened competitiveness from new and disruptive market entrants. Our mission is to transform how travel companies operate in a digital world by delivering next-generation products to accelerate growth, drive efficiency and create a differentiated customer experience.

        We have achieved our leadership position by combining over 20 years of deep domain expertise with a comprehensive portfolio of modular SaaS solutions that facilitate and automate travel companies’ most mission-critical functions. We accelerate innovation and enable smarter, data-driven decisions at many of the world’s largest and most well recognized airlines, airports, hotels, cruise lines & energy companies
    </p>
</div>

const Footer = () => <nav>
    <address>IBS @ Copy right</address>
</nav>


//Application Component

const App = () => <div>
    <Header />
    <Main />
    <Footer />
</div>


ReactDOM.render(<App />, document.getElementById('root'))

