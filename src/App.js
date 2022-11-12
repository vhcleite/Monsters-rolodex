import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {


  constructor() {
    super()

    this.state = { 
      firstName: 'Victor', 
      lastName: 'Leite' }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>My name is {this.state.firstName} Leite</p>
          <button onClick={() => {
            this.setState({ firstName: 'Raimundo' })
          }}>Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
