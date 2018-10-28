//
//
// File name : Posts.js
// Author: vagrant @ 2018-10-28
// Copyright © 2018, vagrant, all rights reserved.
//
//
import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  render() {
    //console.log(this.props.posts);
    let posts;
    if (this.props.posts) {
      posts = this.props.posts.map(post => {
        //console.log(post);
        return <Post key={post.title} post={post} />;
      });
    }
    return (
      <div className="Posts">
        <div className="container">
          <h3 className="my-3">List of Posts</h3>
          <div className="row">{posts}</div>
        </div>
      </div>
    );
  }
}

export default Posts;
