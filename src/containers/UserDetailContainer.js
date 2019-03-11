/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import { fetchUserById } from '../actions/users';
import { fetchPostsByUserId } from '../actions/posts';
import { getUserById, getPosts } from '../selectors/blog';

class UserDetailContainer extends PureComponent {
	static propTypes = {
	  user: PropTypes.object.isRequired,
	  posts: PropTypes.array.isRequired,
	  fetchUser: PropTypes.func.isRequired,
	  fetchPosts: PropTypes.func.isRequired,
	  match: PropTypes.object.isRequired
	};

	componentDidMount() {
	  this.props.fetchUser();
	  this.props.fetchPosts();
	}
	
	render() {
	  return (
	    <UserDetail {...this.props} />
	  );
	}
}

const mapToStateProps = (state) => ({
  user: getUserById(state),
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUser() {
    return dispatch(fetchUserById(this.match.params.id));
  },
  fetchPosts() {
    return dispatch(fetchPostsByUserId(this.match.params.id));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(UserDetailContainer);
