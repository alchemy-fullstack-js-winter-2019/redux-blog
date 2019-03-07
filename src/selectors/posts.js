export const getPosts = state => state.posts.posts;

export const getUser = state => state.posts.user;

export const getAllUsers = state => state.users.users;

export const getPost = state => state.posts.post;

export const getCommentsById = state => {
  return state.posts.comments;
};

