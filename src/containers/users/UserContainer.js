import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import UserDetail from '../../components/user/UserDetail';
import { getUserById } from '../../selectors/user';
import { fetchUser } from '../../actions/users';
import { resetState } from '../../actions/common';
import PropTypes from 'prop-types';
import { fetchUserPosts } from '../../actions/posts';
import { getAllPosts } from '../../selectors/posts';

class UserContainer extends PureComponent {
  static propTypes = {
    userDetail: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    resetStateFunc: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetch();
    }
  }

  componentWillUnmount() {
    this.props.resetStateFunc();
  }

  render() {
    return (
      <UserDetail {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({
  userDetail: getUserById(state),
  posts: getAllPosts(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchUser(props.match.params.id));
    dispatch(fetchUserPosts(props.match.params.id));
  },
  resetStateFunc() {
    dispatch(resetState());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
