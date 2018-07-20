import React from 'react';

class MoreMovies extends React.Component{

    loadMoreHandler(){

        alert("aaa");
    }

    render(){
        return(
            <div className="movieMore movieActionButtons">
				<button onClick={this.loadMoreHandler} className="btn btn-success">More Movies</button>
            </div>
        
        )
    }
}
export default MoreMovies;

