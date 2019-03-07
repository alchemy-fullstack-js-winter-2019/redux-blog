import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import Posts from '../components/posts/Posts';
import { getUser, getPostsByUserId } from '../selectors/users/users';
import { fetchUser, fetchPostByUserId } from '../action/users';
import { withRouter } from 'react-router-dom';

class User extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
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

  render() {
    return (
      <>
      <UserDetail user={this.props.user}/>
      <Posts posts={this.props.posts} />
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
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
