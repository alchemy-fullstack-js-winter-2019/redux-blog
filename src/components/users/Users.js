import CreateList from '../higher-order/CreateList';
import PropTypes from 'prop-types';
import User from './User';
import styles from '../styles/Users.css';

function Users({ users }) {
  return CreateList(User, users, styles.Users);
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
