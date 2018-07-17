import React from 'react';

class MyMovies extends React.Component{

    

    render(){
        console.log(this.props)
        return(
           
            <div className="movieWrap col-md-2">
                <h1>{this.props.movieitems}</h1>
               
            </div>
        
        )
    }
}
export default MyMovies;

