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
    this.props.fetchPosts(this.props.match.params.userId);
  }
  render() {
    const { name, email, username } = this.props.user;
    const { posts } = this.props;

    const postsList = posts.map(post => {
      return <Link key={post.title} to={`/posts/${post.userId}/${post.id}`}><li>{post.title}</li></Link>;
    });

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
