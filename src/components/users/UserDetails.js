import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class UserDetails extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }
  render() {
    const { name, email, username } = this.props.user;
    const { posts } = this.props;
    const postsList = posts.map((post, i) => {
      <Link to={`/posts/:${post.userId}/${post.id}`} ><li key={i}>{post.title}</li></Link>;
    });
    // console.log(this.params.match);
    return (
      <>
      <h2> User details: </h2>
      <p>
        {name}
        {email}
        {username}
      </p>
      <ul>
        {postsList}
      </ul>
      </>
    );
  }
}
