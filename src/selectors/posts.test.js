import { getPostsBySearch, getPosts, getUser, getAllUsers, getPost, getSearchTerm, getCommentsById, getPostsById, getLongestPost } from './posts';

describe('test', () => {
  it('returns a filtered array of posts', () => {
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
  it('can return the currect search term', () => {
    const state = {
      posts: {
        posts: [
          { title: 'sometitle' }
        ],
        searchTerm: 's'
      }
    }; 

    const result = getSearchTerm(state);
    expect(result).toEqual('s');
  });

  it('can return an array of comments for a specific post', () => {
    const state = {
      posts: {
        comments: [
          { comment: 'some comment' },
          { comment: 'some comment' },
          { comment: 'some comment' }
        ],
        searchTerm: 's'
      }
    }; 
    const result = getCommentsById(state);
    expect(result).toHaveLength(3);

  });
  it('can return a single user`s posts by id', () => {
    const state = {
      users: {
        postsByUser: [
          { post: 'some post' },
          { post: 'some post' },
          { post: 'some post' }
        ],
      }
    }; 

    const result = getPostsById(state);
    expect(result).toHaveLength(3);
  });

  it('can return the longest posts from an array of posts', () => {
    const state = {
      posts: {
        posts: [
          { body: 'some post' },
          { body: 'some post2' },
          { body: 'some post123' },
          { body: 'some post1214' },
          { body: 'some post1225' },
          { body: 'some pos121216' },
          { body: 'some post121217' }
        ],
      }
    }; 
    const result = getLongestPost(state);
    expect(result).toHaveLength(5);
  });
});
