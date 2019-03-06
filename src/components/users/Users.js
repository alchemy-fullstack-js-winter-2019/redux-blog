import React from 'react';
import PropTypes from 'prop-types';

function Users({users}) {
  const listOfUsers = users.map(user => <li key={user.id}>{user}</li>);

  return (
    <>
    <ul>
      {listOfUsers}
    </ul>
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
