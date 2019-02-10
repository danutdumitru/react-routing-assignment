import React, { Component } from "react";
import axios from "axios";


import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  shouldComponentUpdate(nextProps, nextState) {
      const result = (this.state.postId !== +nextProps.match.params["id"])
        || ((!this.state.postId) && (nextProps.match.params["id"])) ;
        console.log ("should component update" + result);
        return result;
  }

  componentDidMount() {
    const postId = this.props.match.params["id"];
    if (postId) {
      axios.get("/posts/" + postId).then(response => {
        // console.log(response);
        this.setState({ loadedPost: response.data, postId: postId });
      });
    }
  }

  componentDidUpdate() {
    const postId = this.props.match.params["id"];
    if ((postId) && (postId !==this.state.postId)) {
      axios.get("/posts/" + postId).then(response => {
        // console.log(response);
        this.setState({ loadedPost: response.data, postId: postId });
      });
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.state.postId).then(response => {
      console.log(response);
    });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.state.postId) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
