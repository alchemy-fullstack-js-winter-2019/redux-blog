export const getAllComments = state => state.comments.comments;

export const getCommentsByPost = (state, postId) => {
  return getAllComments(state)
    .filter(comment => comment.postId === Number(postId));
};
