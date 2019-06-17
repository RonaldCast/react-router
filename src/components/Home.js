import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      authentication: localStorage.getItem("auth")
    };

    this.handleRemoveAuthanticationClick = this.handleRemoveAuthanticationClick.bind(
      this
    );
    this.handleAuthanticationClick = this.handleAuthanticationClick.bind(this);
  }

  handleAuthanticationClick() {
    localStorage.setItem("auth", true);
    this.setState({
      authentication: localStorage.getItem("auth")
    });
  }
  handleRemoveAuthanticationClick() {
    localStorage.removeItem("auth");
    this.setState({
      authentication: localStorage.getItem("auth")
    });
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Authentication {this.state.authentication}</p>
        <button onClick={this.handleAuthanticationClick}>login</button>

        <button onClick={this.handleRemoveAuthanticationClick}>logout</button>
      </div>
    );
  }
}

export default Home;
