import UserDetails from '../../components/users/UserDetails';
import { connect } from 'react-redux';
import { getUser, getPosts } from '../../selectors/posts';
import { getUserAction, getPostsAction } from '../../actions/posts';

const mapStateToProps = state => ({
  user: getUser(state),
  posts: getPosts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUser(id) {
    dispatch(getUserAction(id));
  },
  fetchPosts() {
    dispatch(getPostsAction());
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
