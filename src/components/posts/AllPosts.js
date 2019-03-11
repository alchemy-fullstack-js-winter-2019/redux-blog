import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import SearchForm from './SearchForm';
import qs from 'querystring';

class AllPosts extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    term: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    if(prevProps.term !== this.props.term) {
      const { pathname } = this.props.location;
      const search = qs.stringify({ term: this.props.term });
      this.props.history.push(`${pathname}?${search}`);
    }
  }

  componentDidMount(){
    this.props.fetch();
  }
  
  render() {
    const { posts, onChange, term } = this.props;
    const postList = posts.map((post) =>{
      return <Post key={post.id} post={post} />;
    });
    return (
      <> 
        <SearchForm onChange={onChange} term={term}/>
        <ul>{postList}</ul> 
      </>
    );
  }
}

export default AllPosts;
