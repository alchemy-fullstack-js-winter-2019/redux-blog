import {
  getAllComments,
  getCommentsByPost
} from './comments';

describe('comments selector tests', () => {
  let state = {};

  beforeEach(() => {
    state = {
      comments: {
        comments: [
          { 
            postId: 1,
            comment: 'this is some text'
          },
          {
            postId: 2,
            comment: 'this is some text'
          },
          {
            postId: 3,
            comment: 'this is some text'
          }
        ]
      }
    };
  });

  it('returns the comments from state', () => {
    const results = getAllComments(state);

    expect(results).toEqual(state.comments.comments);
  });

  it('returns comments by postId', () => {
    const results = getCommentsByPost(state, 2);

    expect(results).toEqual([
      {
        ...state.comments.comments[1],
        postId: 2
      }
    ]);
  });
});
