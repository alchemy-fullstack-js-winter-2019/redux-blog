import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/Post.css';

function Post({ title, body, id }) {
  return (
    <div className={styles.Post}>
      <Link to={`/posts/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{body}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Post;
