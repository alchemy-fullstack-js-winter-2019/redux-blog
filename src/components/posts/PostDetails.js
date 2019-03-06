import React from 'react';
import PropTypes from 'prop-types';

function PostDetails({ post }) {
  return (
    <>
      {post}
    </>
  );
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetails;
