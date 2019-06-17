import React, { Component } from "react";

class Product extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Product</h1>
        <p>
          <strong>Match.url:</strong> {match.url}
        </p>
        <p>
          <strong>Match.path:</strong> {match.path}
        </p>
      </div>
    );
  }
}

export default Product;
