import React, { Component } from 'react'

class PhotoAlubm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            album: []
        }
    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(Response => Response.json())
            .then(data => this.setState({ album: data }))
           
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
                <button className="btn btn-danger">See all post</button>
            </div>
        )
    }
}
export default PhotoAlubm
