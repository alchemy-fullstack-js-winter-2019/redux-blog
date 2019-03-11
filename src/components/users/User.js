import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/User.css';

function User({ id, name, username, website, email }) {
  return (
    <Link to={`/users/${id}`} className={styles.User}>
      <div>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <p>{website} / {email}</p>
      </div>
    </Link>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default User;
