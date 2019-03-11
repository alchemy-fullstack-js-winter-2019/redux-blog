const { getUser, 
  getUsers, 
  getPosts, 
  getComments, 
  getUserPosts, 
  getPost,
  getComment, getPostComments } = require('./blogApiServices');

jest.mock('./blogApiServices');

describe('blogApi services', () => {
  it('gets a user', () => {
    return getUser()
      .then(user => {
        expect(user).toEqual([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          }
        ]);
      });
  });

  it('gets a list of users', () => {
    return getUsers()
      .then(users => {
        expect(users).toEqual([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
          }
        ]);
      });
  });

  it('gets a list of posts', () => {
    return getPosts()
      .then(posts => {
        expect(posts).toEqual([
          {
            userId: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
          },
          {
            userId: 1,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
          }
        ]);
      });
  });

  it('gets a list of comments', () => {
    return getComments()
      .then(comments => {
        expect(comments).toEqual([
          {
            postId: 1,
            body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
          },
          {
            postId: 1,
            body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
          }
        ]);
      });
  });

  it('gets posts by user id', () => {
    return getUserPosts()
      .then(posts => {
        expect(posts).toEqual([
          {
            userId: 2,
            id: 11,
            title: 'et ea vero quia laudantium autem',
            body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
          },
          {
            userId: 2,
            id: 12,
            title: 'in quibusdam tempore odit est dolorem',
            body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
          }
        ]);
      });
  });

  it('gets posts by postId', () => {
    return getPost()
      .then(posts => {
        expect(posts).toEqual([
          {
            userId: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
          }
        ]);
      });
  });

  it('gets comments by comment id', () => {
    return getComment()
      .then(comments => {
        expect(comments).toEqual([{
          postId: 1,
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'   
        }]);
      });
  });

  it('gets comments by postId', () => {
    return getPostComments()
      .then(comments => {
        expect(comments).toEqual([
          {
            postId: 1,    
            body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
          },
          {
            postId: 1,
            body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
          }
        ]);
      });
  });
});
