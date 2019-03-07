import React from 'react';
import PropTypes from 'prop-types';




export default function Comment({ comment }) {

  return (
    <li> {comment} </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
}
;
