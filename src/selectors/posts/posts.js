export const getPosts = state => state.posts.posts;

export const getPost = state => state.posts.post;

export const getSearchTerm = state => state.posts.searchTerm;

export const getFilteredPosts = state => {
  const searchTerm = getSearchTerm(state);
  return getPosts(state).filter(post => {
    const { title } = post;
    return title.includes(searchTerm);
  });
};

export const getLongestPosts = state => {
  return state.posts.posts.sort((a, b) => {
    return a.body.length - b.body.length;
  }).slice(0, 5);
};
