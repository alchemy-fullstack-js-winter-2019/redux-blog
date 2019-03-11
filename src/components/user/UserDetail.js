import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { Detail } from '../posts/PostDetail';
import styles from 'styled-components';

const UserTitle = styles(Detail)`
@media (min-width: 374px) {
  h1{
    color: rgb(93, 95, 96);
    font-family: 'Roboto', san-serif;
  }
}
`;

const UserDetail = ({ userDetail, posts }) => {
  const listOfPosts = posts.map((post, i) => {
    return (
      <li key={i}>{post.body}</li>
    );
  });

  if(!userDetail) {
    return <Redirect to={ROUTES.HOME.linkTo()} />;
  }

  const { name, email, username } = userDetail;

  return (
    <>
    <UserTitle>
      <h1> USER </h1>
      <p> name: {name} </p>
      <p> email: {email} </p>
      <p> username: {username} </p>
      <p>List of Posts: {listOfPosts}</p>
    </UserTitle>
    </>
  );
};

UserDetail.propTypes = {
  userDetail: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

export default UserDetail;
