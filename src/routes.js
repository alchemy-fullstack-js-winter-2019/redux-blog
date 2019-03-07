import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Posts from './containers/posts/AllPosts';

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
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} path={route.path} component={route.component} />;
  });
};
