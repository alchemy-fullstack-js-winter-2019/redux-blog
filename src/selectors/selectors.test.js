import { getPosts, getUsers, getPostById, getComments, getUserById } from './blog';

describe('selectors test', () => {
  it('can get posts', () => {
    const state = {
      users: [],
      comments: [],
      posts: {
        posts: [
          {
            'userId': 1,
            'id': 1,
            'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
          }
        ],
        post: {}
      }
    };

    const fetchedPosts = getPosts(state);
      
    expect(fetchedPosts).toEqual([
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }
    ]);
  });

  it('can get a post by id', () => {
    const state = {
      users: [],
      comments: [],
      posts: {
        posts: [
          {
            'userId': 1,
            'id': 1,
            'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
          }
        ],
        post: {
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        }
      }
    };

    const fetchedPost = getPostById(state);
      
    expect(fetchedPost).toEqual(
      {
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }
    );
  });

  it('can get users', () => {
    const state = {
      users: {
        users: [{
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
          'address': {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
              'lat': '-37.3159',
              'lng': '81.1496'
            }
          }
        }]
      },
      comments: [],
      posts: {
        posts: [],
        post: {}
      }
    };

    const fetchedUsers = getUsers(state);
      
    expect(fetchedUsers).toEqual([
      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'address': {
          'street': 'Kulas Light',
          'suite': 'Apt. 556',
          'city': 'Gwenborough',
          'zipcode': '92998-3874',
          'geo': {
            'lat': '-37.3159',
            'lng': '81.1496'
          }
        }
      }
    ]);
  });

  it('can get comments', () => {
    const state = {
      users: {},
      comments: {
        comments: [
          {
            'postId': 1,
            'id': 2,
            'name': 'quo vero reiciendis velit similique earum',
            'email': 'Jayne_Kuhic@sydney.com',
            'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
          }
        ]
      },
      posts: {
        posts: [],
        post: {}
      }
    };

    const fetchedComments = getComments(state);
      
    expect(fetchedComments).toEqual([
      {
        'postId': 1,
        'id': 2,
        'name': 'quo vero reiciendis velit similique earum',
        'email': 'Jayne_Kuhic@sydney.com',
        'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
      }
    ]);
  });

  it('can get a user by id', () => {
    const state = {
      users: {
        users: [],
        user: {
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
          'address': {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
              'lat': '-37.3159',
              'lng': '81.1496'
            }
          }
        }
      },
      comments: [],
      posts: {}
    };

    const fetchedUser = getUserById(state);
      
    expect(fetchedUser).toEqual(
      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'address': {
          'street': 'Kulas Light',
          'suite': 'Apt. 556',
          'city': 'Gwenborough',
          'zipcode': '92998-3874',
          'geo': {
            'lat': '-37.3159',
            'lng': '81.1496'
          }
        }
      }
    );
  });
});
