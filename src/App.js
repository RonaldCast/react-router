import React, { Component } from "react";
import { Link } from "react-router-dom";

import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    //attribute match
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
          </ul>
        </header>
        <section />
        <Content body={children} />
      </div>
    );
  }
}

export default App;
