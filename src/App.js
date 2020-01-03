import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";

import ProductDetail from "./components/ProductDetail";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
