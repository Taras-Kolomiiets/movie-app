import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieItem from "./components/MovieItem";
import Movies from "./components/Movies";
import Search from "./components/Search";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link className="link btn btn-primary mb-2" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Search />
              </li>
            </ul>
          </nav>
        </header>
        <div className="app">
          <Switch>
            <Route exact component={Movies} path={"/"} />
            <Route component={MovieItem} path={`/movie/:id`} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
