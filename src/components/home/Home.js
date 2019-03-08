import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    const { posts } = this.props;
    const postList = posts.map((post, i) => {
      return <Link key={i} to={`/posts/${post.userId}/${post.id}`}><li key={i}>{post.body}</li></Link>;
    });
    return (
      <>
      <h1> ALL HAIL TEAM YEEZY </h1>
      <ul>{postList}</ul>
      </>
    );
  }
}

