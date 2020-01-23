import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";

const App = () => {

  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CardPage} />
    </Switch>
  )
};

export default App;
