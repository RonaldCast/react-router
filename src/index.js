import React from "react";
import { render } from "react-dom";
import AppRouter from "./router";
//assest
import "./styles.css";

//import react-router
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <Router>
    <AppRouter />
  </Router>,
  rootElement
);
