import React from 'react';
import renderer from 'react-test-renderer';
import PostDetail from './PostDetail';
import { MemoryRouter } from 'react-router-dom';

describe('PostDetail Snapshot', () => {
  it('matches a snapshot', () => {
    const postDetailTest = {
      'userId': 1,
      'id': 1,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    };
    const comments = [{
      'postId': 1,
      'id': 1,
      'name': 'id labore ex et quam laborum',
      'email': 'Eliseo@gardner.biz',
      'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
      'postId': 1,
      'id': 2,
      'name': 'quo vero reiciendis velit similique earum',
      'email': 'Jayne_Kuhic@sydney.com',
      'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
    }];
    const tree = renderer.create(
      <MemoryRouter>
        <PostDetail post={postDetailTest} comments={comments} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
