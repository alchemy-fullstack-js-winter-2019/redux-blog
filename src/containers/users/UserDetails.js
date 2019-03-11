import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../selectors/users';
import { getPostsForUser } from '../../selectors/posts';
import { fetchUsers } from '../../actions/users';
import { fetchPosts } from '../../actions/posts';
import User from '../../components/users/User';
import Posts from '../../components/posts/Posts';
import PropTypes from 'prop-types';

class UserDetails extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { user, posts } = this.props;
    return (
      <>
      {user && <User {...user}/>}
      {posts && <Posts posts={posts}/>}
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: getCurrentUser(state, props.match.params.id),
  posts: getPostsForUser(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
