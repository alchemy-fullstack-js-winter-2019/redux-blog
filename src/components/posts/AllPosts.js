import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class AllPosts extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.fetch();
  }
  render() {
    const { posts } = this.props;
    const postList = posts.map((post) =>{
      return <Post key={post.id} post={post} />;
    });
    return (
      <ul>{postList}</ul> 
    );
  }
}

export default AllPosts;
