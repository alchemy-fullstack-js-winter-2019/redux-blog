import UserDetails from '../../components/users/UserDetails';
import { connect } from 'react-redux';
import { getUser, getPostsById } from '../../selectors/posts';
import { getUserAction, getPostsByIdAction } from '../../actions/posts';

const mapStateToProps = state => ({
  user: getUser(state),
  posts: getPostsById(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUser(id) {
    dispatch(getUserAction(id));
  },
  fetchPosts(id) {
    dispatch(getPostsByIdAction(id));
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
