import React from "react";
// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import WelcomePage from "./pages/Welcome";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
      </Switch>
    </Router>
  );
};

export default App;
