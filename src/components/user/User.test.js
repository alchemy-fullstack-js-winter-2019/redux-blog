import React from 'react';
import renderer from 'react-test-renderer';
import User from './User';
import { MemoryRouter } from 'react-router-dom';

describe('User', () => {
  it('matches a snapshot', () => {
    const user = {
      name: 'Chelsey Dietrich'
    };
    const tree = renderer.create(
      <MemoryRouter>
        <User user={user}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
