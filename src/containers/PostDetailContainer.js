/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostDetail from '../components/posts/PostDetail';
import { fetchPostById } from '../actions/posts';
import { fetchComments } from '../actions/comments';
import { getPostById, getComments, getUserById } from '../selectors/blog';
import { fetchUserById } from '../actions/users';

class PostDetailContainer extends PureComponent {
	static propTypes = {
	  post: PropTypes.object.isRequired,
	  comments: PropTypes.array,
	  fetchPost: PropTypes.func.isRequired,
	  fetchComments: PropTypes.func.isRequired,
	  match: PropTypes.object.isRequired
	};

	componentDidMount() {
	  this.props.fetchPost();
	  this.props.fetchComments();
	}
	
	render() {
	  return (
	    <PostDetail {...this.props} />
	  );
	}
}

const mapToStateProps = state => ({
  post: getPostById(state),
  comments: getComments(state),
  user: getUserById(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPost() {
    const action = fetchPostById(this.match.params.id);
    dispatch(action);
    action.payload.then(post => {
      dispatch(fetchUserById(post.userId));
    });
  },
  fetchComments() {
    return dispatch(fetchComments(this.match.params.id));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(PostDetailContainer);
