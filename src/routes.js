import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Posts from './containers/posts/AllPosts';
import PostDetails from './components/posts/PostDetails';

export const ROUTES  = {
  HOME: {
    path: '/home',
    component: Home,
    linkTo: () => '/home'
  },
  POSTS: {
    path: '/posts',
    component: Posts,
    linkTo: () => '/posts'
  },
  POSTS_DETAILS: {
    path: '/posts/:userId/:id',
    component: PostDetails,
    linkTo: () => '/posts/:userId/:id'

  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route exact key={route.path} path={route.path} component={route.component} />;
  });
};
