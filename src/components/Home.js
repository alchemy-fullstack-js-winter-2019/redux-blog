import React from 'react';
import PropTypes from 'prop-types';
import Posts from './posts/Posts';

export default function Home({ posts }) {
  return <Posts posts={posts}/>;
}

Home.propTypes = {
  posts: PropTypes.array.isRequired
};
