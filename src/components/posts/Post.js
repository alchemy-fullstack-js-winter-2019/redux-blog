import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => {  
  return (
    <>
    <li>
      <h2>{post.userId}</h2>
      <h3>{post.title}</h3>
      <h4>{post.body}</h4>
    </li>
    </>
  );
};

Post.propTypes =  {
  post: PropTypes.object.isRequired
};
export default Post;
