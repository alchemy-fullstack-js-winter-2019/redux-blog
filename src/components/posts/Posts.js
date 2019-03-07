import React from 'react';
import PropTypes from 'prop-types';

function Posts({ posts }) {
  console.log(posts);
  const listOfPosts = posts.map(post => {
    return (
      <li key={post.id}>{post.title}</li>
    );
  });
  return (
    <ul>
      {listOfPosts}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
