import React from 'react';

export const Customer = props => {
    //props.name = "XXXX";
    return <div>
        <h2>{props.name}</h2>
        <address>
            <p>{props.address.city},{props.address.state} {props.address.country}</p>
        </address>
    </div>
}