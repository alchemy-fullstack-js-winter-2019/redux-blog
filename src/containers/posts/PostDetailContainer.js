import { connect } from 'react-redux';
import PostDetails from '../../components/posts/PostDetails';
import { getUser } from '../../selectors/posts';
import { getUserAction } from '../../actions/posts';

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(id) {
    dispatch(getUserAction(id));
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);



