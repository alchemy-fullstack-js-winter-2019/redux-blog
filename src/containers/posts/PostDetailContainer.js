import { connect } from 'react-redux';
import PostDetails from '../../components/posts/PostDetails';
import { getUser, getPost, getCommentsById } from '../../selectors/posts';
import { getUserAction, getPostAction, getCommentsByIdAction } from '../../actions/posts';

const mapStateToProps = state => ({
  user: getUser(state),
  post: getPost(state),
  comments: getCommentsById(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(id) {
    dispatch(getUserAction(id));
  },
  fetchPost(id) {
    dispatch(getPostAction(id));
  },
  fetchComments(id) {
    dispatch(getCommentsByIdAction(id));
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);



