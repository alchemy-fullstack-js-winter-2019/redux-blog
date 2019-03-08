import { connect } from 'react-redux';
import Home from '../components/home/Home';
import { getPostsAction } from '../actions/posts';
import { getLongestPost } from '../selectors/posts';

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
