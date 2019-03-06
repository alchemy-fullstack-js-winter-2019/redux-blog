import React from 'react';
import AllUsers from '../../containers/AllUsers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
      <h1>Redux Blog</h1>
      <AllUsers />
    </>
  );
}
