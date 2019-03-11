/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../components/home/Home';
import { fetchPosts } from '../actions/posts';
import { getLongestPosts } from '../selectors/blog';

class HomeContainer extends PureComponent {
	static propTypes = {
	  posts: PropTypes.array.isRequired,
	  fetch: PropTypes.func.isRequired
	};

	componentDidMount() {
	  this.props.fetch();
	}
	
	render() {
	  return (
	    <Home {...this.props} />
	  );
	}
}

const mapToStateProps = state => ({
  posts: getLongestPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchPosts());
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(HomeContainer);
