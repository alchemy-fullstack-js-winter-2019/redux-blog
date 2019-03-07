import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Posts from '../components/posts/Posts';
import { getFilteredPosts, getSearchTerm } from '../selectors/posts/posts.js';
import { fetchPosts, updatePostSearchTerm } from '../action/posts';
import PropTypes from 'prop-types';

class AllPosts extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    term: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Posts {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: getFilteredPosts(state),
  term: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
  },
  onChange({ target }) {
    dispatch(updatePostSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
