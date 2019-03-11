import { connect } from 'react-redux';
import AllPosts from '../../components/posts/AllPosts';
import { getPostsAction, updateSearchTerm } from '../../actions/posts';
import { getPostsBySearch, getSearchTerm } from '../../selectors/posts';


const mapStateToProps = state => ({
  posts: getPostsBySearch(state),
  term: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getPostsAction());
  },
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
