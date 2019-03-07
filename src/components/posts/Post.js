import React from 'react';
import PropTypes from 'prop-types';

function Post({ postTitle }) {
  console.log('pleeeease', postTitle);
  return (
    <>
      <li>{postTitle}</li>
    </>
  );
}

Post.propTypes = {
  postTitle: PropTypes.string.isRequired
};

export default Post;
