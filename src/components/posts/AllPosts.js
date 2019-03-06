import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function AllPosts(posts) {
  const postList = posts.map(post =>{
    return <li key={post}><Post post={post.title} /></li>;
  });
  return (
    <>
      {postList}
    </>
  );
}

AllPosts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default AllPosts;
