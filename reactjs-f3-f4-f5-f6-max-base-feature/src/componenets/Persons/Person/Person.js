import React, {Component} from 'react';
import Radium from 'radium';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
      }
    
      UNSAFE_componentWillMount() {
        console.log('[Person.js] Inside componentWillMount')
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount')
      }


    // sample customize error for trapping 
    // const rnd = Math.random();
    // if ( rnd > 0.6 ) {
    //     throw new Error( 'Something went wrong' );
    // }

    render () {
        console.log('[Person.js] Inside render')

        const style = {
            '@media (max-width: 500px)': {
                color: 'red',
                border: '1px solid yellow'
            }
        };

        return (
        
            <div className={style}>
                {/*<h1 onClick={this.props.click}>Hello this is {this.props.name} component I am {Math.floor(Math.random() * 30)} for random and {this.props.age} for props years old</h1>*/}
                <h1 onClick={this.props.click}>Hello this is {this.props.name} component I am {this.props.age} years old</h1>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Radium(Person);