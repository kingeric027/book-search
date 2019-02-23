import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved"
import Search from "./pages/search";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/wrapper";
//import Wrapper from "./components/wrapper"

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component = {Search} />
            <Route exact path = "/saved" component = {Saved} />
            <Route component = {NoMatch} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
