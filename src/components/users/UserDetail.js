import React from 'react';
import PropTypes from 'prop-types';

function UserDetail({ user }) {
  const { name, username, email } = user;
  return (
    <div>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserDetail;
