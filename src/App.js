import React, { Component } from 'react';
import './App.css';
import './Movie/MovieDisplay.css';
import './Album/Album.css'
import './Register/Register.css'

import MovieDisplay from './Movie/MovieDisplay';
import PhotoAlubm from './Album/PhotoAlubm'
import Register from './Register/Register'
import Location from './Location/Location'
class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1> Movie Store</h1>
          <Location/>
        </header>

        <section>
        <Register/>
          <p className="App-intro">
            See the latest vidoes in this app
          </p>
          <div id="movieWrapper" className="col-md-12 ">
            <MovieDisplay />
          </div>

          <PhotoAlubm />

        </section>
      </div>
    );
  }
}

export default App;
