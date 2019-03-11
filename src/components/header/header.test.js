import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

