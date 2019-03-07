import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './components/home/Home';


export const ROUTES  = {
  HOME: {
    path: '/home',
    component: Home,
    linkTo: () => '/home'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} path={route.path} component={route.Component} />;
  });
};
