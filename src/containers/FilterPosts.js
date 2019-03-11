/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Posts from '../components/posts/Posts';
import { connect } from 'react-redux';
import { fetchPosts, updateSearchTerm } from '../actions/posts';
import { getFilteredPosts } from '../selectors/blog';

class FilterPosts extends PureComponent {
	static propTypes = {
	  posts: PropTypes.array.isRequired,
	  fetch: PropTypes.func.isRequired,
	  onChange: PropTypes.func.isRequired,
	  term: PropTypes.string
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
  posts: getFilteredPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchPosts());
  },
  onChange({ target }) {
    return dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(FilterPosts);
