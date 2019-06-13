import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Category from "./components/Category";
import Home from "./components/Home";
import Product from "./components/Product";

const configRouter = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/product" component={Product} />
    </Switch>
  </App>
);

export default configRouter;

/*
Path and Match 

* match.url. Una cadena que devuelve la parte 
  coincidente de la URL. Esto es 
  particularmente útil para construir <Link> anidados

* match.path: devuelve un string the la ruta, que es 
  Route path=""

* match.isExact. Un valor booleano que devuelve 
  verdadero si la
  coincidencia fue exacta (sin ningún carácter final).

* match.params. Un objeto que contiene pares
  clave / valor de 
  la URL analizada por el paquete Path-to-RegExp.
  
 Me quede en Switch component
*
*/
