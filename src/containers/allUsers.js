import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../selectors/users';
import Users from '../components/users/Users';
import PropTypes from 'prop-types';
import { fetchUsers } from '../actions/users';

const mapStateToProps = state => ({
  users: getAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUsers());
  }
});

class AllUsers extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { users } = this.props;
    return (
        <>
          <Users users={users}/>
        </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
