import React from 'react';
import Radium, { StyleRoot } from 'radium';
import Aux from '../../hoc/Aax';

const cockpit = (props) => {
    // inline javascript style
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    if ( props.showPersons ) {
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

     // let classes = ['red', 'bold'].join(' ');   // "red bold"
     const classes = [];
     if (props.persons.length <= 2) {
       classes.push('red'); // classes = ['red']
     }
     if (props.persons.length <= 1) {
       classes.push('bold'); // classes = ['red', 'bold']
     }

    return (
        <React.Fragment>
            <Aux>
                <StyleRoot>
                    <h1 className={classes.join(' ')}>hello world</h1>

                    <button 
                    style={style}>Switch Name</button>

                    <button 
                    onClick={props.clicked}>Toggle Person</button>
                </StyleRoot>
            </Aux>
        </React.Fragment>

    );
};

export default Radium(cockpit);