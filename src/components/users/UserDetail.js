import React from 'react';
import PropTypes from 'prop-types';

function UserDetail({ user, posts }) {
  const { name, username, email } = user;
  const postsList = posts.map(post => {
    return <li key={post.id}>{post.title}</li>;
  });
  return (
    <div>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <ul>
        {postsList}
      </ul>
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

export default UserDetail;
