import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchComments, FETCH_COMMENTS, FETCH_COMMENTS_LOADING } from './comments';

jest.mock('../services/blogApiServices');

describe('Comments actions', () => {
  it(`fetchComments creates an action where the payload 
      is a list of comments derived from a promise`, done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchComments());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_COMMENTS_LOADING
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_COMMENTS,
        payload: [{
          postId: 1,
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
        },
        {
          postId: 1,
          body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
        }]
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
      done();
    }, 500);
  });
});
