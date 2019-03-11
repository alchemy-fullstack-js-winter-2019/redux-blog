import React from 'react';
import User from './User';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('User', () => {
  it('matches a snapshot', () => {
    const props = {
      id: 3,
      name: 'kaiya',
      username: 'ladybeard',
      website: 'schnepherds4life.org',
      email: 'itsme@kai.com'
    };

    const tree = renderer.create(
      <MemoryRouter>
        <User { ...props } />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
