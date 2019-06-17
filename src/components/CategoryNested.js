import React, { Component } from "react";

class CategoryNestes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>Children {match.params.name}</h1>
        <h3>Match</h3>
        <hr />
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

export default CategoryNestes;

/*rutas anidadas */
/*match */
/*match.url para crear Link
  match.path para creae Route

*/
