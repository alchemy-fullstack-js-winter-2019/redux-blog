import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from 'styled-components';


export const NavStyle = styles(Link)`
@media (min-width: 374px) {
  display: inline;
  justify-content: center;
  font-size: 10px;
  text-decoration: none;
  padding: 10px 20px 10px 35px;
  width: 200px; 
  text-align: center;
  margin: 0;
  color: white;
  font-family: 'Carrois Gothic SC', sans-serif;
}

@media (min-width: 413px) {
  padding: 10px 40px 10px 35px;
}


@media (min-width: 700px) {
  font-size: 30px;
  padding-left: 15%;
  width: 100%;  
}
`;

export const HeaderStyle = styles.header`
  background: rgb(129, 132, 137);
`;

export default function Header() { 
  return (
    <>
      <HeaderStyle>
        <nav>
          <NavStyle to={ROUTES.HOME.linkTo()}>Home</NavStyle>
          <NavStyle to={ROUTES.ALL_USERS.linkTo()}>Users</NavStyle>
          <NavStyle to={ROUTES.ALL_COMMENTS.linkTo()}>Comments</NavStyle>
          <NavStyle to={ROUTES.ALL_POSTS.linkTo()}>Posts</NavStyle>
        </nav>
      </HeaderStyle>
    </>
  );

}

