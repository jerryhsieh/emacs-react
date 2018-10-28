import React, {Component} from "react";
import "./App.css";
import Posts from "./Components/Posts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    // this.setState({
    //   posts: [
    //     {id: 1, title: "first post", body: "this is the first post"},
    //     {id: 2, title: "second post", body: "this is the second post"},
    //     {id: 3, title: "third post", body: "this is the third post"},
    //     {id: 4, title: "forth post", body: "this is the forth post"},
    //   ],
    // });
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(res => res.json())
      //.then(data => console.log(data));
      .then(data => this.setState({posts: data}));
  }
  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
