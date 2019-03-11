import { connect } from 'react-redux';
import AllUsers from '../../components/users/AllUsers';
import { getUsersAction } from '../../actions/posts';
import { getAllUsers } from '../../selectors/posts';


const mapStateToProps = state => ({
  users: getAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers() {
    dispatch(getUsersAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);


