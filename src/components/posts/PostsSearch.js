import React from 'react';
import SearchTerm from '../../containers/posts/SearchTerm';
import FilteredPosts from '../../containers/posts/FilteredPosts';

const PostsSearch = () => {
  return (
    < >
      <SearchTerm />
      <FilteredPosts />
    </>
  );
};

export default PostsSearch;
