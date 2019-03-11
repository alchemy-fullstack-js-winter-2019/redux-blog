import React from 'react';
import PropTypes from 'prop-types';
import FivePosts from '../posts/FivePosts';

export default function Home({ posts }) {
  return (
    <>
      <h2>FEATURED POSTS</h2>
      <FivePosts posts={posts} />
    </>
  );
}

Home.propTypes = {
  posts: PropTypes.array
};
