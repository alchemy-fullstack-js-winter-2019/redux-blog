import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from '../../components/posts/Post';
import Comments from '../../components/comments/Comments';
import { getPostById } from '../../selectors/posts';
import { getCommentsByPost } from '../../selectors/comments';
import { fetchPosts } from '../../actions/posts';
import { fetchComments } from '../../actions/comments';

class PostDetail extends PureComponent {
  static propTypes = {
    post: PropTypes.object,
    comments: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }
  
  render() {
    const { post, comments } = this.props;
    return (
    <>
      {post && <Post { ...post } />}
      {comments && <Comments comments={comments} />}
    </>
    );

  }
}

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.match.params.postId),
  comments: getCommentsByPost(state, props.match.params.postId)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
