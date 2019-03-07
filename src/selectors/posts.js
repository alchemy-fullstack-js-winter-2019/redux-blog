export const getAllPosts = state => state.posts.posts;

export const getTop5Posts = state => {
  return getAllPosts(state)
    .sort((firstPost, secondPost) => secondPost.body.length - firstPost.body.length)
    .slice(0, 5);
};
