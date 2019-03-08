import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import { getUser, getPostsByUserId } from '../selectors/users/users';
import { fetchUser, fetchPostByUserId } from '../action/users';
import { reset } from '../action/common/reset';
import { withRouter } from 'react-router-dom';

class User extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    reset: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    })
  };

  componentDidMount() {
    this.props.fetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    return (
      <>
      <UserDetail user={this.props.user} posts={this.props.posts} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  posts: getPostsByUserId(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchUser(props.match.params.id));
    dispatch(fetchPostByUserId(props.match.params.id));
  },
  reset() {
    dispatch(reset());
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
