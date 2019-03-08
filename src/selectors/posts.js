export const getPosts = state => state.posts.posts;

export const getUser = state => state.posts.user;

export const getAllUsers = state => state.users.users;

export const getPost = state => state.posts.post;

export const  getSearchTerm  = state => state.posts.searchTerm;

export const getCommentsById = state => {
  return state.posts.comments;
};

export const getPostsById = state => state.users.postsByUser;

export const getLongestPost = state => {
  const postBodies = getPosts(state).map(obj => obj.body).sort((a, b) => {
    if(a.length > b.length) return -1;
    if(a.length < b.length) return 1;
    return 0;
  }).slice(0, 5);
  return postBodies;
};


export const getPostsBySearch = (state) => {
  const searchTerm = getSearchTerm(state);
  const filtered = getPosts(state).filter(post => {
    const { title } = post;
    return title.includes(searchTerm);

  });
  return filtered;
}
;
