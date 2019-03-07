import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

// function AllPosts({ posts }) {
//   const postList = posts.map(post =>{
//     return <li key={post}><Post post={post.title} /></li>;
//   });
//   return (
//     <>
//       {postList}
//     </>
//   );
// }

// AllPosts.propTypes = {
//   posts: PropTypes.array.isRequired
// };

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
      return <Post key={post.id} postTitle={post.title} />;
    });
    return (
      <ul>{postList}</ul> 
    );
  }
}

export default AllPosts;
