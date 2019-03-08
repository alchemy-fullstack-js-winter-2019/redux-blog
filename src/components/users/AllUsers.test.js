import React from 'react';
import renderer from 'react-test-renderer';
import AllUsers from './AllUsers';
import { BrowserRouter as Router } from 'react-router-dom';

describe('All Users component tests', () => {
  it('renders the All Users component correctly', () => {
    const users = [{ name: 'user1', id:1 }, { name: 'user1', id:1 }];
    const fetchUsers = jest.fn();
    const tree = renderer.create(
      <Router>
        <AllUsers
          users={users}
          fetchUsers={fetchUsers}
        />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
