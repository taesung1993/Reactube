import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Result from "./routes/Result";

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Home}></Route>
      <Route path="/result" component={Result}></Route>
    </HashRouter>
  );
};

export default App;
