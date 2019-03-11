import React from 'react';
import PropTypes from 'prop-types';
import Post from '../posts/Post';
import styles1 from '../app/App.css';

export default function UserDetail({ user, posts }) {
  const listOfPosts = posts.map((post, i) => {
    return (
      <li key={i}>
        <Post post={post} />
      </li>
    );
  });
  
  return (
    <>
      <div className={styles1.userDetail}>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
      </div>
      <h2>Posts</h2>
      <ul>{listOfPosts}</ul>
    </>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};
