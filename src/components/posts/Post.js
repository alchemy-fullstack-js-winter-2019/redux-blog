import React from 'react';
import PropTypes from 'prop-types';

function Post(postTitle) {
  return (
    <>
      {postTitle}
    </>
  );
}

Post.propTypes = {
  postTitle: PropTypes.string.isRequired
};

export default Post;
