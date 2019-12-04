import React, {Component} from 'react';
import './App.css';
import Person from './componenets/Person';

import F1 from './componenets/F1Challenge/ContainerMain';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
    })
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
    })
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    // console.log(this.state);
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    return (
      <React.Fragment>
        <div>
          <h1>hello world</h1>

          <button 
            style={style}
            onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

          <button 
            onClick={this.togglePersonHandler}>Toggle Person</button>

          {
            this.state.showPersons ? 
              <div>
                <Person name={this.state.persons[0].name} 
                        age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        click={ () => this.switchNameHandler('NOLRAM!!')} 
                        changed={this.nameChangeHandler} />
                {/* {<Person name={this.state.persons[2].name} 
                        age={this.state.persons[2].age} >Children elements</Person>} */}
              </div> : null
          }
        </div>
        <F1 />
      </React.Fragment>
    )
  }
}

export default App;
