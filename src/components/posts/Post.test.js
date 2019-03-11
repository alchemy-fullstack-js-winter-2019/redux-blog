import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';
import { MemoryRouter } from 'react-router-dom';

describe('Post Snapshot', () => {
  it('matches a snapshot', () => {
    const postTest = {
      'userId': 1,
      'id': 1,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    };
    const tree = renderer.create(
      <MemoryRouter>
        <Post post={postTest}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
