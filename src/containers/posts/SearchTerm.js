import { connect } from 'react-redux';
import { updatePostSearchTerm } from '../../actions/posts';
import SearchForm from '../../components/posts/SearchForm';
import { getSearchTerm } from '../../selectors/posts';

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updatePostSearchTerm(target.value));
  },
  handleReset() {
    dispatch(updatePostSearchTerm(''));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
