import React from 'react';
import renderer from 'react-test-renderer';
import User from './User';
import { BrowserRouter as Router } from 'react-router-dom';

describe('User component tests', () => {
  it('renders the User component correctly', () => {
    const users = { user: 'user1' };

    const tree = renderer.create(
      <Router>
        <User 
          user={users}
        />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
