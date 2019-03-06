/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Posts from '../components/posts/Posts';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/blog';
import { getPosts } from '../selectors/blog';

class FilterPosts extends PureComponent {
	static propTypes = {
	  posts: PropTypes.array.isRequired,
	  fetch: PropTypes.func.isRequired
	};

	componentDidMount() {
	  this.props.fetch();
	}
	render() {
	  return (
	    <Posts {...this.props} />
	  );
	}
}

const mapToStateProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchPosts());
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(FilterPosts);
