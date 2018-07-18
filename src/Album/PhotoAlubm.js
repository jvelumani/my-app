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

        const alubmItems = this.state.album.map(post => (
            <div className="post-wrap" key={post.userId}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ))

        return (
            <div>
                <h1>Display Posts </h1>
                {alubmItems}
            </div>
        )
    }
}
export default PhotoAlubm
