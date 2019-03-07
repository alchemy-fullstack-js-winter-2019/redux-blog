import React from 'react';
import Header from '../header/Header';
import { getRoutes, ROUTES }  from '../../routes';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';





export default function App() {
  const listOfRoutes = getRoutes(ROUTES);
  return (

    <>
    <Router>
      <Switch>
        {listOfRoutes}
      </Switch> 
    </Router>
    <Header/>
    
    </>
  );
}
