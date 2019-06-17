import React, { Component } from "react";
import { Link } from "react-router-dom";

import Content from "./components/Content";

class App extends Component {
  render() {
    const { children } = this.props;
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
        <Content body={children} />
      </div>
    );
  }
}

export default App;
