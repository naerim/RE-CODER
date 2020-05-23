import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../Routes/Main";
import Login from "../Routes/Login";
import SignUp from "../Routes/SignUp";
import SignUpDone from "../Routes/SignUpDone";
import LoginDone from "../Routes/LoginDone";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signUpDone/:name" component={SignUpDone} />
          <Route exact path="/loginDone/:id" component={LoginDone} />
        </Switch>
      </Router>
  );
};

export default App;
