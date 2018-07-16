import React from 'react';

class MyMovies extends React.Component{

    render(){
        console.log(this.props)
        return(
           
            <div className="movieWrap col-md-2">
                <h1>{this.props.name}</h1>
                <p>{this.props.movieYear}</p>
                <p>{this.props.movieDis}</p>
            </div>
        
        )
    }
}
export default MyMovies;

