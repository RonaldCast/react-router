import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//import component
import CategoryFull from "./CategoryFull";
import CategoryNested from "./CategoryNested";

class Category extends Component {
  render() {
    return (
      <div>
        <h1>Category Partner</h1>
        <Switch>
          <Route exact path="/category" component={CategoryFull} />
          <Route path="/category/:name" component={CategoryNested} />
        </Switch>
      </div>
    );
  }
}

export default Category;

/*rutas anidadas */
