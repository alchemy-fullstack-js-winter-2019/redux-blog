import React from 'react';
import PropTypes from 'prop-types';
import styles1 from '../app/App.css';

export default function Comment({ comment }) {
  return (
    <div className={styles1.comment}>
      <p>{comment.body}</p>
      <p>Email: {comment.email}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};
