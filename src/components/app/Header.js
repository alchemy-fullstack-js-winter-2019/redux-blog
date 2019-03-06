import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeContainer from '../../containers/Home';
import FilterPosts from '../../containers/FilterPosts';
import PostDetailContainer from '../../containers/PostDetailContainer';

export default function Header() {
  return (
    <>
      <h1> NavBar </h1>
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/posts'>Posts</Link>
          <Switch>
            <Route exact path='/' component={HomeContainer}/>
            <Route exact path='/posts' component={FilterPosts}/>
            <Route exact path='/posts/:id' component={PostDetailContainer}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}
