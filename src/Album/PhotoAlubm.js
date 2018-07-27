import React, { Component } from 'react'

class PhotoAlubm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // activeIndex:0
            album: [],
            size:5
        }
    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(Response => Response.json())
            .then(data => this.setState({ album: data }))
           

    }
    

    loadMorePost = () =>  {
    
        this.setState({
            size: this.state.size + 50
          
        });
    

    }

    render() {
        
        const postItems = this.state.album.slice(0, this.state.size).map(post => (
            <div className="post-wrap" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <span>{post.userId}</span>
            </div>
        ))

        return (

            <div>

                <h1>Display Posts </h1>
                {postItems}
                <MorePost 
                size ={this.state.size}
                len={this.state.album.length}
                incrementSize={this.loadMorePost} 
                />
            </div>
        )
    }
}

class MorePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };

    }

    MorePostDisplay() {
        this.props.incrementSize();
       console.log( this.props.incrementSize())
        if (this.props.len <= this.props.size) {
            this.setState({ disabled: true });
          } else {
            this.setState({ disabled: false });
          }
    }
    render() {

        return (
            <div>
                <button 
                    className="btn btn-primary"
                    disabled={this.state.disabled}
                    onClick={() => this.MorePostDisplay()}>More Post
                 </button>
            </div>
        )
    }
}

export default PhotoAlubm
