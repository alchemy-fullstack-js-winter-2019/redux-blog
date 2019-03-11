import React from 'react';
import UserDetails from './UserDetails';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('UserDetails component tests', () => {
  it('renders teh PostDetails componenet correctly', () => {
    const match = {
      params: { userId: 1 }
    };
    const posts = [];
    const user = {};
    const fetchPosts = jest.fn();
    const fetchUser = jest.fn();

    const tree = renderer.create(
      <Router>
        <UserDetails
          posts={posts}
          user={user}
          fetchPosts={fetchPosts}
          fetchUser={fetchUser}
          match={match}
        />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
