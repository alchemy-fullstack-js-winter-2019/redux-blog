import React from 'react';
import renderer from 'react-test-renderer';
import Users from './Users';
import { MemoryRouter } from 'react-router-dom';


describe('users', () => {
  it('matches a snapshot', () => {
    const users = [
      {
        id: '23',
        name:'Clementina DuBuque'
      },
      {
        id: '5',
        name:'Kurtis Weissnat'
      }
    ];
    const tree = renderer.create(
      <MemoryRouter>
        <Users users={users}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
