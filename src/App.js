import React, { Component } from "react";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
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
        <h1>Hello word</h1>
      </div>
    );
  }
}

export default App;
