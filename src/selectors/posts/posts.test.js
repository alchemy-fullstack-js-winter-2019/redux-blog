import { getPost, getPosts, getFilteredPosts } from './posts';

describe('posts selectors test', () => {
  it('can get a list of posts', () => {
    const state = {
      posts: {
        posts: ['orange', 'banana', '420'] 
      }
    };
    const selectedPosts = getPosts(state);
    expect(selectedPosts).toEqual(['orange', 'banana', '420']);
  });

  it('can get a post', () => {
    const state = {
      posts: {
        post: {
          body: 'Hello'
        }
      }
    };
    const selectedPost = getPost(state);
    expect(selectedPost).toEqual({ body: 'Hello' });
  });
  it('can get a filterd post', () => {
    const state = {
      posts: {
        posts: [{ title: 'orange' }, { title: 'banana' }, { title:'420' }], 
        searchTerm: '420'
      }
    };
    const filteredPost = getFilteredPosts(state);
    expect(filteredPost).toEqual([{ title: '420' }]);
  });
});
