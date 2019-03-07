import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Posts from '../components/posts/Posts';
import { getPosts } from '../selectors/posts/posts.js';
import { fetchPosts } from '../action/posts';
import PropTypes from 'prop-types';

class AllPosts extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Posts posts={this.props.posts} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
