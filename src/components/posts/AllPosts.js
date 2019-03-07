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
    console.log(this.props.posts, 'thissss');
    this.props.fetch();
  }
  render() {
    console.log('other', this.props.posts);
    const { posts } = this.props;
    const postList = posts.map(post =>{
      return <li key={post}><Post post={post.title} /></li>;
    });
    return (
      <ul>{postList}</ul> 
    );
  }
}

export default AllPosts;
