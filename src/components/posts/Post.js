import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <li key={post.id}>
        {post.title}
      </li>
    </Link>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
