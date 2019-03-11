import React from 'react';
import renderer from 'react-test-renderer';
import Users from './Users';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Posts', () => {
  it('matches a snapshot', () => {
    const users = [{
      name: 'name',
      username: 'username',
      email: 'email@email'
    }];
    
    const tree = renderer.create(
      <Router>
        <Users users={users} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
