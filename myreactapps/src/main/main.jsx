import React from 'react';
import { Customer } from './customer';

const address = { state: 'Tamil Nadu', city: 'Coimbatore', country: 'India' }

export const Main = props => <div>
    <p>The travel industry is undergoing significant transformation driven by increased travel volumes, evolving consumer expectations and heightened competitiveness from new and disruptive market entrants. Our mission is to transform how travel companies operate in a digital world by delivering next-generation products to accelerate growth, drive efficiency and create a differentiated customer experience.

        We have achieved our leadership position by combining over 20 years of deep domain expertise with a comprehensive portfolio of modular SaaS solutions that facilitate and automate travel companies’ most mission-critical functions. We accelerate innovation and enable smarter, data-driven decisions at many of the world’s largest and most well recognized airlines, airports, hotels, cruise lines & energy companies
    </p>
    <h1>Customer Information</h1>
    <Customer name="Make My Trip" address={address} />
    <Customer name="goibibo" address={{ state: 'HR', city: 'Delhi', country: 'India' }} />


</div>