//
//
// File name : Post.js
// Author: vagrant @ 2018-10-28
// Copyright © 2018, vagrant, all rights reserved.
//
//
import React, {Component} from "react";

class Post extends Component {
  render() {
    return (
      <div className="col-md-6 text-left">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <div className="card-title">{this.props.post.title}</div>
            <div className="card-text mb-3">
              {this.props.post.body.substring(0, 50)}
              ...
            </div>
            <a href="{this.props.post.id}" className="btn btn-outline-primary">
              More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
