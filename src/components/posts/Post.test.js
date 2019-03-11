import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';
import { MemoryRouter } from 'react-router-dom';

describe('Post', () => {
  it('matches a snapshot', () => {
    const post = {
      userId: '5', 
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
    };
    const tree = renderer.create(
      <MemoryRouter>
        <Post post={post}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
