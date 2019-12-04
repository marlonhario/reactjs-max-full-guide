import React, {Component} from 'react';
import './App.css';
import Menu from './componenets/Menu';
import Sidebar from './componenets/Sidebar';
import Dashboard from './componenets/Dashboard';
import Footer from './componenets/Footer';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Max', qty: 28 },
      { id: 2, name: 'Manu', qty: 29 },
      { id: 3, name: 'Stephanie', qty: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
    showUpdateBtn: false
  }

  sidebarToogle = () => {
    const sPerson = this.state.showPersons;
    this.setState({ showPersons: !sPerson});
  }

  updateBtnShow = () => {
  
    // this.setState({
    //   persons: [
    //     ...this.state.persons,
    //     { name: 'Manu', age: 29 },
    //     { name: 'Stephanie', age: 26 },
    //   ]
    // })

  }

  addItem = () => {

  }


  

  render () {
    console.log(document.querySelector('#itemName').value);
    let sidebarStyle = null; 
    let sidebarS = null;

    if ( this.state.showPersons ) {

      sidebarS = (
        <div className="sidebar_cont">
          <Sidebar show={this.state.showUpdateBtn} />
        </div>
      );
      
      sidebarStyle = {
        width: "70%"
      }
    }

    

    return (
      <React.Fragment>
        <div className="main_cont">
          <div className="cont_cont">
            { sidebarS }
            <div className="dash_cont" style={sidebarStyle}>
              <Menu />
              <Dashboard items={this.state.items} />
            </div>
          </div>
          <div className="footer_cont">
            <Footer sidebarToogle={this.sidebarToogle} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
