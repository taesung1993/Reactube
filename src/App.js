import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Result from "./routes/Result";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route path="/result" component={Result}></Route>
      <footer>
        <span>&copy; {new Date().getFullYear()}</span>
        <span>REACTUBE</span>
      </footer>
    </BrowserRouter>
  );
};

export default App;
