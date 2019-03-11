import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Comment.css';

function Comment({ body, email }) {
  return (
    <div className={styles.Comment}>
      <p>{body}</p>
      <h4>-{email}</h4>
    </div>
  );
}

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Comment;
