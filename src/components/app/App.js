import React from 'react';
import AllUsers from '../../containers/AllUsers';
import User from '../../containers/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AllPosts from '../../containers/AllPosts';

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={AllUsers} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/posts" component={AllPosts} />
      </Switch>
    </Router>
    </>
  );
}
