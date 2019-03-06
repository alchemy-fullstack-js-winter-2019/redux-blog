import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Users from '../components/users/Users';
import { getUsers } from '../selectors/users/users';
import { fetchUsers } from '../action/users';
import PropTypes from 'prop-types';

class AllUsers extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Users users={this.props.users} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUsers());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);
