import React from 'react';
import renderer from 'react-test-renderer';
import PostDetail from './PostDetail';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Post', () => {
  it('matches a snapshot', () => {
    const post = {
      title: 'title',
      body: 'body'
    };

    const comments = [
      {
        title: 'title1',
        body: 'body1'
      },
      {
        title: 'title2',
        body: 'body2'
      }
    ];

    const user = {
      name: 'name',
      email: 'email'
    };

    const tree = renderer.create(
      <Router>
        <PostDetail comments={comments} post={post} user={user} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
