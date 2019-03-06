import React from 'react';
import PropTypes from 'prop-types';

function User({user}) {
  
  return (
    <li key={user.id}>{user.username}</li>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;