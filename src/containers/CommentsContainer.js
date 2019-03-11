/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { fetchComments } from '../actions/comments';
import { getComments } from '../selectors/blog';

class CommentsContainer extends PureComponent {
	static propTypes = {
	  comments: PropTypes.array.isRequired,
	  fetch: PropTypes.func.isRequired
	};

	componentDidMount() {
	  this.props.fetch();
	}
	render() {
	  return (
	    <Comments {...this.props} />
	  );
	}
}

const mapToStateProps = state => ({
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchComments(this.match.params.id));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(CommentsContainer);
