import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <>
      <Link to={`/posts/${post.userId}/${post.id}`}><li>{post.title}</li></Link>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
