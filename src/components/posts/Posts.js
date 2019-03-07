import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, term, onChange }) {
  const listOfPosts = posts.map(post => {
    return (
      <Post key={post.id} post={post} />
    );
  });
  return (
    <>
    <input type='text' name='term' value={term} onChange={onChange} />
    <ul>
      {listOfPosts}
    </ul>
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Posts;
