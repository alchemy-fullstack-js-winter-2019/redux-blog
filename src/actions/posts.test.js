import { FETCH_POSTS, fetchPosts, fetchPostById, FETCH_POST } from './posts';
import { getPosts, getPostById } from '../services/blogService';

jest.mock('../services/blogService');

describe('actions test', () => {
  it('fetches posts', () => {
    const action = fetchPosts();

    expect(action).toEqual({ 
      type: FETCH_POSTS,
      loadStart: 'LOAD_POSTS_START',
      loadEnd: 'LOAD_POSTS_END',
      payload:  getPosts()
    });
  });

  it('fetches posts by id', () => {
    const action = fetchPostById(1);

    expect(action).toEqual({ 
      type: FETCH_POST,
      loadStart: 'LOAD_POST_START',
      loadEnd: 'LOAD_POST_END',
      payload:  getPostById(1)
    });
  });
});
