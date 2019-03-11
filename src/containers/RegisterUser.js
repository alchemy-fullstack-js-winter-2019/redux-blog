import React from 'react';
import { connect } from 'react-redux';
import RegisterUserForm from '../components/users/RegisterUserForm';
import PropTypes from 'prop-types';
import { getRegisterName, getRegisterUsername, getRegisterWebsite, getRegisterEmail } from '../selectors/users';
import { updateRegName, updateRegUsername, updateRegWebsite, updateRegEmail, registerUser } from '../actions/users';

function RegisterUser({ name, username, website, email, onSubmit, onChange }) {
  return (
    <RegisterUserForm 
      onSubmit={onSubmit.bind(null, name, username, website, email)}
      name={name}
      username={username}
      website={website}
      email={email}
      onChange={onChange}
    />
  );
}

const mapStateToProps = state => ({
  name: getRegisterName(state),
  username: getRegisterUsername(state),
  website: getRegisterWebsite(state),
  email: getRegisterEmail(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      name: updateRegName,
      username: updateRegUsername,
      website: updateRegWebsite,
      email: updateRegEmail
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  onSubmit(name, username, website, email, event) {
    event.preventDefault();
    dispatch(registerUser({ name, username, website, email }));
  }
});

RegisterUser.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUser);
