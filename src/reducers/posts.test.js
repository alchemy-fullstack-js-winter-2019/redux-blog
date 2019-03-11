import reducer from './posts';

describe('posts reducer', () => {
  it('handles the fetch posts action', () => {
    const state = {
      posts: [],
      post: {}
    };

    const fetchedPosts = reducer(state, {
      type: 'FETCH_POSTS',
      payload: [
        {
          'userId': 1,
          'id': 1,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          'userId': 2,
          'id': 2,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        }
      ]
    });

    expect(fetchedPosts).toEqual({
      post: {},
      posts: [
        {
          'userId': 1,
          'id': 1,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          'userId': 2,
          'id': 2,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        }
      ]
    });
  });

  it('handles the fetch post action', () => {
    const state = {
      posts: [],
      post: {}
    };
    
    const fetchedPost = reducer(state, {
      type: 'FETCH_POST',
      payload: 
        {
          'userId': 1,
          'id': 1,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        }
    });

    expect(fetchedPost).toEqual({
      post: {
        'id': 1,
        'userId': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      posts: []
    });
  });
});
