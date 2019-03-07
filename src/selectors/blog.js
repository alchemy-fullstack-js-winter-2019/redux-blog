export const getPosts = state => state.posts.posts;
export const getPostById = state => state.posts.post;
export const getLongestPosts = state => {
  return state.posts.posts.sort((a, b) => {
    return a.body.length - b.body.length;
  }).slice(0, 5);
};

export const getPostsForUser = (state, userId) => {
  return getPosts(state).filter(post => {
    return post.userId === userId;
  });
};

export const getUsers = state => state.users.users;
export const getUserById = state => state.users.user;
