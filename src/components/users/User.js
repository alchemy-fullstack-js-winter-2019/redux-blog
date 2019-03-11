import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function User({ user }) {
  return (
    <Link to={`/users/${user.id}`}>
      <li key={user.id}>
        {user.username}
      </li>
    </Link>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
