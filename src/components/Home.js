import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

function Home({ posts }) {
  const postList = posts.map(post => {
    return (
      <li key={post.id}>{post.title}</li>
    );
  });
  return (
    <>
      <Header />
      <ul>
        {postList}
      </ul>
    </>
  );
}

Home.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Home;

