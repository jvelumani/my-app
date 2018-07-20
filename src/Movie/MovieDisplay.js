import React, { Component } from 'react'

class MovieDisplay extends Component {

  constructor (){
    super()
    this.state = {
      videos:[

        {
            id :1,
            name:"kabali",
            movieImage:"images1",
            movieYear:2009
    
        },
        {
            id :2,
            name:"kabali2",
            movieImage:"images1",
            movieYear:2009
    
        },
        {
            id :3,
            name:"kabali3",
            movieImage:"images1",
            movieYear:2009
    
        },
        {
            id :4,
            name:"Captain",
            movieImage:"images1",
            movieYear:2009
    
        },
        {
          id :4,
          name:"Captain",
          movieImage:"images1",
          movieYear:2009
  
      },
      {
        id :4,
        name:"Captain",
        movieImage:"images1",
        movieYear:2009

    }
    , {
      id :4,
      name:"Captain",
      movieImage:"images1",
      movieYear:2009

  }
    ]

    }
  }


  render() {

   
    const alubmItems = this.state.videos.map(post => (
     
      <div className="col-md-2 movie-item" key={post.id}>
          <h4>{post.name}</h4>
          <p>{post.movieImage}</p>
          <span>{post.movieYear}</span>
      </div>
    
    ))
    return (
      <div>
        <p>here is the move display</p>
        {alubmItems}
      </div>
    )
  }
}

export default MovieDisplay 
