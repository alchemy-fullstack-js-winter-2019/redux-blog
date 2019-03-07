import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function User({ user }) {
  return (
    <Link to={`/users/${user.username}`}><li>{user.name}</li>
    </Link>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;

