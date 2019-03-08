import reducer from './posts';
import { getPostsAction, getUserAction, getPostAction, getCommentsByIdAction, updateSearchTerm } from '../actions/posts';


jest.mock('../services/jsonApi.js');

describe('posts reducer', () => {
  it('can handle getting posts', () => {
    const state = {
      posts: []
    };
    const getPosts = getPostsAction();
    const updatedState = reducer(state, getPosts);
    expect(updatedState).toEqual({ posts: Promise.resolve() });
  });

  it('can handle getting a user', () => {
    const state = {
      user: {}
    };
    const getUser = getUserAction();
    const updatedState = reducer(state, getUser);
    expect(updatedState).toEqual({ user: Promise.resolve() });
  });

  it('can handle getting a post', () => {
    const state = {
      post: {}
    };
    const getPost = getPostAction();
    const updatedState = reducer(state, getPost);
    expect(updatedState).toEqual({ post: Promise.resolve() });
  });

  it('can handle getting comments by id', () => {
    const state = {
      comments: [{ comments: 'this' }, { comments: 'that' }]
    };
    const getComments = getCommentsByIdAction();
    const updatedState = reducer(state, getComments);
    expect(updatedState).toEqual({ comments: Promise.resolve() });
  });

  it('can handle getting search term', () => {
    const state = {
      searchTerm: 'x'
    };
    const getSearchTerm = updateSearchTerm('xx');
    const updatedState = reducer(state, getSearchTerm);
    expect(updatedState).toEqual({ searchTerm: 'xx' });
  });
});
