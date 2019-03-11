import React from 'react';
import AllUsers from '../../containers/AllUsers';
import User from '../../containers/User';
import Post from '../../containers/Post';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../containers/LongestPosts';
import AllPosts from '../../containers/AllPosts';

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/users" component={AllUsers} />
        <Route exact path="/posts" component={AllPosts} />
        <Route exact path="/posts/:id" component={Post} />
      </Switch>
    </Router>
    </>
  );
}
