import React, { Component } from "react";

class CategoryNestes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      he: ""
    };
  }
  render() {
    const number = this.props.match.params.name;
    return (
      <div>
        <h1>Children {number}</h1>
      </div>
    );
  }
}

export default CategoryNestes;

/*rutas anidadas */
