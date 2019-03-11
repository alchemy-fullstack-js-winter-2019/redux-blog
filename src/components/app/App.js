import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header.js';
import { ROUTES } from '../../routes/routes';
import 'normalize.css';
import image5 from '../../../assets/floriane-vita-88722-unsplash.jpg';

import styled from 'styled-components';

const HomePage = styled.section`
  @media (min-width: 374px) {
      background-color:rgb(242, 243, 244);
      height: 100vh;
      padding: 0;
  }
  @media (min-width: 700px) {
      background-color:rgb(242, 243, 244);
      height: 100vh;
  }`;
const HomeTitle = styled.h1`
  @media (min-width: 374px) {
    height: 20%;
    font-size: 20px;
    padding-top: 80px;
    color: rgb(93, 95, 96);
    text-shadow: 1pt 1pt 1pt white;
    text-align: center;
    font-family: 'Carrois Gothic SC', sans-serif;
    letter-spacing: .1em;
    background-image: url(${image5});
    background-size: 100% 700px;
    background-repeat: no-repeat;
    margin: 0;
  }
  @media (min-width: 700px) {
    height: 30%;
    font-size: 50px;
    padding-top: 10%;
  }
`;

export default function App() {
  return (
    <Router>
      < >
        <HomePage>
          <HomeTitle>DEWEY, CHEATUM, HOWE &amp; <br></br> ASSOCIATES</HomeTitle>
          <Header />
          <Switch>
            <Route exact path={ROUTES.ALL_USERS.path} component={ROUTES.ALL_USERS.Component} />
            <Route exact component={ROUTES.ALL_POSTS.Component} path={ROUTES.ALL_POSTS.path} />
            <Route exact component={ROUTES.ALL_COMMENTS.Component} path={ROUTES.ALL_COMMENTS.path} />
            <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
            <Route exact component={ROUTES.USER_CONTAINER.Component} path={ROUTES.USER_CONTAINER.path} />
            <Route exact component={ROUTES.POST_CONTAINER.Component} path={ROUTES.POST_CONTAINER.path} />
          </Switch>
        </HomePage>
      </>
    </Router>
  );
}
