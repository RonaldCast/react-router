import React, { Component } from "react";

class ContentCategory extends Component {
  render() {
    const { body } = this.props;
    return (
      <div>
        <h2>Dentro</h2>
        {body}
      </div>
    );
  }
}

export default ContentCategory;
