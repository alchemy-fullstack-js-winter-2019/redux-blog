import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class AllUsers extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    const userList = users.map((user, i) => {
      return <User key={i} user={user} />;
    });

    return (
      <ul>{userList}</ul>
    );
  }
}

AllUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default AllUsers;
