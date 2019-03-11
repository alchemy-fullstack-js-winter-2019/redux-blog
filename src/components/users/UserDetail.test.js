import React from 'react';
import renderer from 'react-test-renderer';
import UserDetail from './UserDetail';
import { BrowserRouter as Router } from 'react-router-dom';

describe('UserDetail', () => {
  it('matches a snapshot', () => {
    const user = {
      name: 'name',
      username: 'username',
      email: 'email@email'
    };

    const posts = [
      {
        title: 'title1',
        body: 'body1'
      },
      {
        title: 'title2',
        body: 'body2'
      }
    ];

    const tree = renderer.create(
      <Router>
        <UserDetail posts={posts} user={user} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
