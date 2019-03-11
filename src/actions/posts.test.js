import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchPosts, FETCH_POSTS } from './posts';

jest.mock('../services/blogApiServices');

describe('Posts actions', () => {
  it(`fetchPosts creates an action where the payload 
      is a list of posts derived from a promise`, done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchPosts());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_START'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_POSTS,
        payload: [{
          userId: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          userId: 1,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        }]
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
      done();
    }, 500);
  });
});
