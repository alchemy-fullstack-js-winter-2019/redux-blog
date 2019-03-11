import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import styles1 from '../app/App.css';

export default function Users({ users }) {
  const listOfUsers = users.map((user, i) => {
    return (
      <li key={i} className={styles1.userLink}>
        <User user={user} />
      </li>
    );
  });

  return (
    <>
      <h2 className={styles1.usersTitle}>Users</h2>
      <ol>
        {listOfUsers}
      </ol>
    </>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};
