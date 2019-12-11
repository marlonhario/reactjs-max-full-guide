import React, {PureComponent} from 'react';
import './App.css';
import Persons from '../componenets/Persons/Persons';
import Radium, { StyleRoot } from 'radium';
import Cockpit from '../componenets/Cockpit/Cockpit';
import Form from '../componenets/Form/Form';


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  // state = {
  //   persons: [
  //     { id: 1, name: 'Max', age: 28 },
  //     { id: 2, name: 'Manu', age: 29 },
  //     { id: 3, name: 'Stephanie', age: 26 },
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
      // return p.userID === id; // meant for debugging subj - sample for logical error
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]); // alternative way 

    person.name = event.target.value;
    // person.name = event.input.value; // meant for debugging subj - sample for error message

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'Stephanie', age: 26 },
    //   ]
    // })
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other value',
      showPersons: false
    })
  }

  UNSAFE_componentWillMount() {
    console.log('[App.js] Inside componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextProps.persons !== this.props.persons || nextState.showPersons !== this.state.showPersons;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate')
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();   // good practice
    const persons = [...this.state.persons];   // good practice using spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    // console.log(this.state);s
  }

  render() {
    console.log('[App.js] Inside render')


    // cleaner way of content conditional
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
          <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangeHandler} />
      );
    }

    return (
      <React.Fragment>
        <StyleRoot>
          <div>
            <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
            <Cockpit 
              showPersons={this.state.showPersons} 
              persons={this.state.persons}
              clicked={this.togglePersonHandler} />

            {/* {<button 
              style={style}
              onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>} */}
            {persons}

            <Form />
          </div>
        </StyleRoot>
      </React.Fragment>
    )
  }
}

export default Radium(App);
