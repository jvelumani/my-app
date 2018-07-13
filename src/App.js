import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import SubmitButton from './SubmitButton/SubmitBut';
class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Movie Store</h1>
        </header>
        <section>
          <p className="App-intro">
            See the latest vidoes in this app
          </p>

        </section>
        <div className="col-md-3 ">
          <UserInput />
          <SubmitButton />
        </div>
        <div className="col-md-7">
          
        </div>
      </div>
    );
  }
}

export default App;
