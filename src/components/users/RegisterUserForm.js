import React from 'react';
import PropTypes from 'prop-types';

function RegisterUserForm({ name, username, website, email, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text" name="name" value={name}></input>
      <input onChange={onChange} type="text" name="username" value={username}></input>
      <input onChange={onChange} type="text" name="website" value={website}></input>
      <input onChange={onChange} type="text" name="email" value={email}></input>
      <button type="submit">Register</button>
    </form>
  );
}

RegisterUserForm.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RegisterUserForm;
