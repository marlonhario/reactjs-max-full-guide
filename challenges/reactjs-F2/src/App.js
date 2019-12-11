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
    error: {noData: 'Please input data', alreadyExist: 'The item already exist please update the item instead'},
    init: {id: 0, name: '', qty: ''},
    urgencyLevel: 0,
    itemId: null,
    itemName: '',
    itemQty: '',
    otherState: 'some other value',
    showPersons: false,
    valid: true,
    alreadyx: false,
    showUpdateBtn: false,
    sort: {
      normalSort: true,
      warningSort: false,
      dangerSort: false,
    },
  }

  sidebarToogle = () => {
    const sPerson = this.state.showPersons;
    this.setState({ showPersons: !sPerson, valid: true, alreadyx: false});
  }

  handleItemChange = event => {
    this.setState({
      itemName: event.target.value
    })
  }


  handleQtyChange = event => {
    this.setState({
      itemQty: event.target.value
    })
  }

  urgencyHandler = (event) => {
    console.log(event.target.value)
    if (event.target.value === 'normal') {
      this.setState({
        sort: {
          normalSort: true,
          warningSort: false,
          dangerSort: false,
        }
      })
    }

    if (event.target.value === 'warning') {
      this.setState({
        sort: {
          normalSort: false,
          warningSort: true,
          dangerSort: false,
        }
      })
    }

    if (event.target.value === 'danger') {
      this.setState({
        sort: {
          normalSort: false,
          warningSort: false,
          dangerSort: true,
        }
      })
    }

    // this.setState({ urgencyLevel: e.target.value })
  }

  handleSubmit = event => {
    const getLastId = this.state.items[this.state.items.length - 1];
    const ifValid = (this.state.itemName && this.state.itemQty) ? true : false;
    let inc_id =  getLastId.id + 1;
    let gname = this.state.itemName;

    let filItem = this.state.items.filter( function (item) {
      return item.name === gname
    });
    console.log(this.state.itemId);
    this.setState({
      valid: ifValid
    })

    if (filItem.length && ifValid && (this.state.showUpdateBtn === false)) {
      this.setState({
        alreadyx: true
      })
    }

    if (ifValid && filItem.length === 0 && (this.state.showUpdateBtn === false)) {
      this.setState({
        items: [
          ...this.state.items,
          {id: inc_id, name: this.state.itemName, qty: this.state.itemQty },
        ]
      })
    } else {

      const upId = this.state.itemId;
      const itemIndex = this.state.items.findIndex(p => {
        return p.id === upId;
      });

      const item = {
        ...this.state.items[itemIndex]
      };

      item.name = this.state.itemName;
      item.qty = this.state.itemQty;
      const items = [...this.state.items];
      items[itemIndex] = item;

      if (ifValid) {
        this.setState({items: items});
      }

      // this.setState({ showUpdateBtn: false });
      this.setState({
        itemId: null,
        itemName: '',
        itemQty: '',
        showUpdateBtn: false
      })
    }

    event.preventDefault();
  }


  updateHandler = (id) => {
    this.setState({ showUpdateBtn: true});
    if (!this.state.showPersons) {
      this.sidebarToogle();
    }

    let getItem = this.state.items.filter( function (item) {
      return item.id === id
    });

    this.setState({
      itemId: getItem[0].id,
      itemName: getItem[0].name,
      itemQty: getItem[0].qty,
      valid: true,
      alreadyx: false
    })
    console.log(this.state.init);
  }


  hideUpdateButton = () => {
    this.setState({
      itemId: null,
      itemName: '',
      itemQty: '',
    })
    this.setState({ showUpdateBtn: false, valid: true, alreadyx: false });
  }

  deleteHandler = (index) => {
    const items = [...this.state.items]; 
    items.splice(index, 1);
    this.setState({items: items});
  }
  


  render () {
    // console.log(this.state);
    let sidebarStyle = null; 
    let sidebarS = null;

    if ( this.state.showPersons ) {

      sidebarS = (
        <div className="sidebar_cont">
          <Sidebar 
            init={this.state.init}
            show={this.state.showUpdateBtn} 
            item={(event) => this.handleItemChange(event)} 
            qty={(event) => this.handleQtyChange(event)} 
            getitem={this.state.itemName}
            getqty={this.state.itemQty}
            submit={this.handleSubmit}
            valid={this.state.valid}
            alert={this.state.error}
            alreadyx={this.state.alreadyx}
            hide={this.hideUpdateButton} />
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
              <Menu 
                change={this.urgencyHandler}
                sort={this.state.sort} />
              <Dashboard 
                sort={this.state.sort}
                items={this.state.items}
                clicked={this.updateHandler}
                delete={this.deleteHandler} />
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
