import React, { Component } from 'react';
import './App.css';
import './Movie/MovieDisplay.css';

import MyMovies from './Movie/MovieDisplay'
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
        <div id ="movieWrapper" className="col-md-12">
           <MyMovies name ={"Theri"} movieImage={"movie image"} movieYear={"1987"} movieDis={"disc"}/>
           <MyMovies name ={"Kali"} movieImage={"movie image"} movieYear={"1990"} movieDis={"disc here"}/>
           <MyMovies name ={"Gajini"} movieImage={"movie oiuoiuoi"} movieYear={"2000"} movieDis={"disc here"}/>
           <MyMovies name ={"Singam"} movieImage={"movie oiuoiuoi"} movieYear={"2010"} movieDis={"disc here"}/>
        </div>
      </div>
    );
  }
}

export default App;
