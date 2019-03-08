import { getPostsBySearch, getPosts, getUser, getAllUsers, getPost } from './posts';



describe('test', () => {
  it('returns an array of posts', () => {
    const state = {
      posts: {
        posts: [
          { title: 'sometitle' }
        ],
        searchTerm: 's'
      }
    }; 
    const results = getPostsBySearch(state);
    expect(results).toHaveLength(1);
  });
  it('gets all posts', () => {
    const state = {
      posts: {
        posts: [{ whatever: 'something something something' }]
      }
    };
    const result = getPosts(state);
    expect(result).toHaveLength(1);
  });
  it('gets 1 only one user', () => {
    const state = {
      posts: {
        user: { user1: 'someUser' }
      }
    };
    const result = getUser(state);
    expect(result.user1).toEqual('someUser');  
  });

  it('getAllUsers', () => {
    const state = {
      users: {
        users: [{ user: 'user' }, { user2: 'another1' }]
      }
    };
    const result = getAllUsers(state);
    expect(result).toHaveLength(2);
  });

  it('gets a post', () => {
    const state = {
      posts: {
        post: { post: 'post1' }
      }
    };
    const result = getPost(state);
    expect(result).toEqual({ post: 'post1' });
  });
});
