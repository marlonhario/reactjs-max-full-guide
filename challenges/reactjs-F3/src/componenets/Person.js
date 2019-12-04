import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>Hello this is {props.name} component I am {Math.floor(Math.random() * 30)} for random and {props.age} for props years old</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            </div>
    );
}

export default person;