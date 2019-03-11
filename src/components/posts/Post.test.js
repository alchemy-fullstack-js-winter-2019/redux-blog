import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';
import { MemoryRouter } from 'react-router-dom';

describe('Post', () => {
  it('matches a post snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Post
          title={'A Post'}
          body={'This is a post on a rant'}
          id={2}
        />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
