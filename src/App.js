import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Watched } from "./component/Watched";
import { Watchlist } from "./component/Watchlist";
import { Add } from "./component/Add";
import { Header } from "./component/Header";
import "./lib/font-awesome/css/all.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>
        
        <Route exact path="/watched">
          <Watched />
        </Route>

        <Route exact path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
