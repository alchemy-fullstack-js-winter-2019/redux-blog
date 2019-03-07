import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Posts from './containers/posts/AllPosts';
import AllUsers from './containers/users/AllUsersContainer';
import PostDetailsContainer from './containers/posts/PostDetailContainer';
import UserDetailContainer from './containers/users/UserDetailContainer'

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
    component: PostDetailsContainer,
    linkTo: () => '/posts/:userId/:id'

  },
  USERS: {
    path: '/users',
    component: AllUsers,
    linkTo: () => '/users'

  },
  USER_DETAILS: {
    path: '/users/:userId',
    component: UserDetailContainer,
    linkTo: () => '/users/:userId'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route exact key={route.path} path={route.path} component={route.component} />;
  });
};
