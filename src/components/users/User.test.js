import React from 'react';
import renderer from 'react-test-renderer';
import User from './User';
import { BrowserRouter as Router } from 'react-router-dom';

describe('User', () => {
  it('matches a snapshot', () => {
    const user = {
      name: 'name',
      username: 'username',
      email: 'email@email'
    };
    
    const tree = renderer.create(
      <Router>
        <User user={user}/>
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
