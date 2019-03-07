import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Users({ users }) {
  const listOfUsers = users.map(user => {
    return (
      <User key={user.id} user={user} />
    );
  });

  return (
    <ul>
      {listOfUsers}
    </ul>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
