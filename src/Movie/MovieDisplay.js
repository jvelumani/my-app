import React from "react";
class MovieDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          id: 1,
          name: "kabali",
          movieImage: require('../images/kala.png'),
          movieYear: 2009
        },
        {
          id: 2,
          name: "kabali2",
          movieImage: require('../images/kabali.png'),
          movieYear: 2009
        },
        {
          id: 3,
          name: "kabali3",
          movieImage: require('../images/kala.png'),
          movieYear: 2009
        },
        {
          id: 4,
          name: "Captain",
          movieImage: require('../images/kabali.png'),
          movieYear: 2009
        },
        {
          id: 5,
          name: "Captain",
          movieImage: require('../images/kabali.png'),
          movieYear: 2009
        },
        {
          id: 6,
          name: "Captain",
          movieImage: require('../images/kabali.png'),
          movieYear: 2009
        },
        {
          id: 7,
          name: "Captain",
          movieImage: require('../images/kabali.png'),
          movieYear: 2009
        }
      ],
      
      size: 3
    };
  }
  handleSize = () => {
    this.setState({
      size: this.state.size + 1
    });
  };
  render() {
    let items = this.state.videos.slice(0, this.state.size);
    console.log(items)
    const alubmItems = items.map((post, index) => (
      <div className="col-md-2 movie-item" key={post.id}>
        <h4>{post.name}</h4>
        <img src={post.movieImage} alt="" />
        <span>{post.movieYear}</span>
      </div>
    ));
    return (
      <div>
        <p>here is the move display</p>
        {alubmItems}
        <div>
          <Button
            size={this.state.size}
            len={this.state.videos.length}
            incrementSize={this.handleSize}
          />
        </div>
      </div>
    );
  }
}
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }
  showContent() {
    this.props.incrementSize();
    if (this.props.len <= this.props.size) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }
  render() {
    return (
      <button
        disabled={this.state.disabled}
        onClick={() => this.showContent()}
        className="btn btn-success"
      >
        More Movies
      </button>
    );
  }
}
export default MovieDisplay;
