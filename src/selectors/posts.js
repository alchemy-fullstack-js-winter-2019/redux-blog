export const getPosts = state => state.posts.posts;

export const getUser = state => state.posts.user;

export const getAllUsers = state => state.users.users;

export const getPost = state => state.posts.post;

export const  getSearchTerm  = state => state.posts.searchTerm;

export const getCommentsById = state => {
  return state.posts.comments;
};

export const getPostsById = state => state.users.postsByUser;


export const getPostsBySearch = (state) => {
  const searchTerm = getSearchTerm(state);
  const filtered = getPosts(state).filter(post => {
    const { title } = post;
    return title.includes(searchTerm);

  });
  return filtered;
}
;
