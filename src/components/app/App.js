import React from 'react';
import AllUsers from '../../containers/AllUsers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Users from '../users/Users';

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
      <h1>Redux Blog</h1>
      <AllUsers />
    </>
  );
}
