import {
  fetchPosts,
  updatePostSearchTerm,
  LOAD_POSTS_START,
  LOAD_POSTS_END
} from './posts';

jest.mock('../services/blogApi.js');

describe('post actions', () => {
  it('gets all posts', () => {
    const result = fetchPosts();

    expect(result).toEqual({
      type: 'FETCH_POSTS',
      loadStart: LOAD_POSTS_START,
      loadEnd: LOAD_POSTS_END,
      payload: expect.any(Promise)
    });
  });

  it('return action updating search term', () => {
    const result = updatePostSearchTerm('anot');

    expect(result).toEqual({
      type: 'UPDATE_POST_SEARCH_TERM',
      loadStart: LOAD_POSTS_START,
      loadEnd: LOAD_POSTS_END,
      payload: 'anot'
    });
  });
});
