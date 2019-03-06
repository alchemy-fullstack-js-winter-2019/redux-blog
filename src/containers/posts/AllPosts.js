import { connect } from 'react-redux';
import AllPosts from '../../components/posts/AllPosts';
import { getPosts } from '../../selectors/posts';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(get)
  }
})

export default connect()(AllPosts);