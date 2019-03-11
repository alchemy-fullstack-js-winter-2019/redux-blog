import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../components/Home';
import { fetchPosts } from '../action/posts';
import { getLongestPosts } from '../selectors/posts/posts';

class LongestPosts extends PureComponent {
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

const mapStateToProps = state => ({
  posts: getLongestPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LongestPosts);
