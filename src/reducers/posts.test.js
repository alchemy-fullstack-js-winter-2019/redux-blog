import reducer from './posts';
import { FETCH_POST, FETCH_POSTS } from '../action/posts';

describe('posts reducer tests', () => {
  it('can fetch posts from state', () => {
    const state = {
      posts: ['orange', 'banana', '420']
    };
    const reducerPosts = reducer(state, {
      type: FETCH_POSTS,
      payload: ['orange', 'banana', '420']
    });
    expect(reducerPosts).toEqual({ posts: ['orange', 'banana', '420'] });
  });

  it('can fetch post from state', () => {
    const state = {
      post: {
        name: 'jerk'
      }
    };
    const reducerPost = reducer(state, {
      type: FETCH_POST,
      payload: { name: 'jerk' }
    });
    expect(reducerPost).toEqual({ post: { name: 'jerk' } });
  });
});
