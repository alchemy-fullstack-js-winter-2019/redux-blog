import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostsAction } from '../../actions/posts';
import { getLongestPost } from '../../selectors/posts';
import { Link } from 'react-router-dom';

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
      return <Link key={i} to={`/posts/${post.userId}/${post.id}`}><li key={i}>{post.body}</li></Link>;
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
