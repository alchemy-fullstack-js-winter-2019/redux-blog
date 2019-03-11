export const getAllPosts = state => { 
  return state.posts.posts;
};

export const getPostById = state => { 
  return state.posts.postDetail;
};

export const getLongestPosts = state => {
  return state.posts.posts
    .map(obj => obj.body)
    .sort((a, b) => b.length - a.length)
    .slice(0, 5);
};

export const getSearchTerm = state => state.posts.searchTerm;

export const getFilteredPosts = state => {
  return getAllPosts(state)
    .filter(posts => posts.body.includes(getSearchTerm(state))
      || posts.title.includes(getSearchTerm(state))
    );
};
