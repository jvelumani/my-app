import React, { Component } from 'react'

class PhotoAlubm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // activeIndex:0
            album: [], activeIndex:0
        }
    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(Response => Response.json())
            .then(data => this.setState({ album: data }))
           
    }

    loadMorePost(){
        // this.setState({album:[...this.state.album, morePost]})
        // console.log(this.setState(album:[]));
       console.log()
        
    }
    render() {
        let size = 6;
        const alubmItems = this.state.album.slice(0,size).map(post => (
            <div className="post-wrap" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <span>{post.userId}</span>
            </div> 
        ))

        return (
            
            <div>
                
                <h1>Display Posts </h1>
                {alubmItems}
                <button onClick={this.loadMorePost}className="btn btn-danger">See all post</button>
            </div>
        )
    }
}
export default PhotoAlubm
