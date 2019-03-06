import React from 'react';
import PropTypes from 'prop-types';

function Users({ users }) {
  const listOfUsers = users.map(user => {
    return (
      <li key={user.id}>{user.username}</li>
    );
  });

  return (
    <>
    <ul>
      {listOfUsers}
    </ul>
    </>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
