import React, { Component } from 'react';
import './App.css';
import './Movie/MovieDisplay.css';

import MyMovies from './Movie/MovieDisplay';
import AddMovies from './Movies/AddMovie/addMovie';
import MoreMovies from './Movies/LoadMovie/moreMovie';
class App extends Component {

  state = {
    name :["Kabali", "Kali", "Kabli 2", "Kali2","Kali4"],
    movieImage:["moveimage","movieimage1", "movieimage1", "movieimage1", "movieimage1"],
    movieYear:["1999","2000","2001","2002","2003","2004","2005"]
  }


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
          <div id="movieWrapper" className="col-md-12">
          <MyMovies name={this.state.name[0]} movieImage={this.state.movieImage[0]} movieYear={this.state.movieYear[0]} movieDis={"disc"} />
          <MyMovies name={this.state.name[1]} movieImage={this.state.movieImage[1]} movieYear={this.state.movieYear[1]}  movieDis={"disc here"} />
          <MyMovies name={this.state.name[2]} movieImage={this.state.movieImage[2]}  movieYear={this.state.movieYear[2]} movieDis={"disc here"} />
          <MyMovies name={this.state.name[3]} movieImage={this.state.movieImage[3]}  movieYear={this.state.movieYear[3]} movieDis={"disc here"} />
        </div>

        
        </section>
		
		<div id="movieControls" className="col-md-12">
			<MoreMovies />
			<AddMovies />
		
		</div>
       
      </div>
    );
  }
}

export default App;
