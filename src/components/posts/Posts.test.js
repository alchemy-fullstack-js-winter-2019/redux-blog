import React from 'react';
import renderer from 'react-test-renderer';
import Posts from './Posts';
import { MemoryRouter } from 'react-router-dom';

describe('Posts Snapshot', () => {
  it('matches a snapshot', () => {
    const postsTest = [    
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }];
    const tree = renderer.create(
      <MemoryRouter>
        <Posts posts={postsTest} term='term' onChange={jest.fn()}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
