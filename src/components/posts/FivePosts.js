import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function FivePosts({ posts }) {
  const listOfPosts = posts.map((post, i) => {
    return (
      <li key={i}>
        <Post post={post} />
      </li>
    );
  });

  return (
    <>
      <ul>
        {listOfPosts}
      </ul>
    </>
  );
}

FivePosts.propTypes = {
  posts: PropTypes.array.isRequired
};
