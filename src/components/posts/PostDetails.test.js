import React from 'react';
import renderer from 'react-test-renderer';
import PostDetails from './PostDetails';
import { BrowserRouter as Router } from 'react-router-dom';

describe('PostDetails component tests', () => {
  it('renders the PostDetails component correctly', () => {
    const match = {
      params: { userId: 1, id: 1 }
    };
    const user  = {};
    const post = {};
    const comments = [{ body: 'something', id: 1, userId: 1 }, { body: 'something', id: 2, userId: 2 }];
    const fetch = jest.fn();
    const fetchPost = jest.fn();
    const fetchComments = jest.fn();
      
    const tree = renderer.create(
      <Router>
        <PostDetails
          comments={comments}
          fetch={fetch}
          fetchPost={fetchPost}
          fetchComments={fetchComments}
          match={match}
          user={user}
          post={post}
        />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
