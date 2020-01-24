import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import ShopHeader from "./shopHeader/ShopHeader";

const styles = {
  main: {
    conteiner: {}
  }
};

const App = () => {
  const { container } = styles;
  return (
    <main role="main" className={container}>
      <ShopHeader numItems={2} total={650} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CardPage} />
      </Switch>
    </main>
  );
};

export default App;
