import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostsAction } from '../../actions/posts';
import { getLongestPost } from '../../selectors/posts';


class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    const { posts } = this.props;
    const postList = posts.map((post, i) => {
      return <li key={i}>{post}</li>;
    });
    return (
      <>
      <h1> HOME COMPONENT </h1>
      <ul>{postList}</ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: getLongestPost(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts() {
    dispatch(getPostsAction());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
