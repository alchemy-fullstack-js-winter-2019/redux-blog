import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  const listOfPosts = posts.map(post => {
    return (
      <Post key={post.id} post={post} />
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
