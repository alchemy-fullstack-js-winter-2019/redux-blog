export const getUsers = state => state.users.users;

export const getUser = state => state.users.user;

export const getPostsByUserId = state => {
  console.log(state.users.posts);
  return state.users.posts;
};
