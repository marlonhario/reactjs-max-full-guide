import React, {Component} from 'react';
import './App.css';
import ContHeader from './componenets/ContainerHeader';
import ContContent from './componenets/ContainerContent';
import ContFooter from './componenets/ContainerFooter';


class App extends Component {
  state = {
    header: [
      { title: 'Logo' },
      { title: 'About' },
      { title: 'Contact Us' },
      { title: 'Login' }
    ],
    content: 
      {
        sidebar: [
          { title: 'sample 1' },
          { title: 'sample 2' },
          { title: 'sample 3' },
          { title: 'sample 4' },
          { title: 'sample 5' }
        ],
        dashboard: [
          { title: 'Headline' },
          { title: 'Article 1' },
          { title: 'Article 2' }
        ],
      }
    ,
    footer: { title: 'Footer' },
    showPersons: false
  }


  render() {
    return (
      <React.Fragment>
        <div className="class_main">
          <ContHeader headerTitle={this.state.header} />
          <ContContent contentTitle={this.state.content} />
          <ContFooter footerTitle={this.state.footer} />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
