/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Users from '../components/users/Users';
import { fetchUsers } from '../actions/users';
import { getUsers } from '../selectors/blog';

class UsersContainer extends PureComponent {
	static propTypes = {
	  users: PropTypes.array.isRequired,
	  fetch: PropTypes.func.isRequired
	};

	componentDidMount() {
	  this.props.fetch();
	}
	
	render() {
	  return (
	    <Users {...this.props} />
	  );
	}
}

const mapToStateProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchUsers());
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(UsersContainer);
