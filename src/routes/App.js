import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "../styles/globalStyles";

import HomePage from "../pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
