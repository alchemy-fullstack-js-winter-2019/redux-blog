import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Post component tests', () => {
  it('renders the Post component correctly', () => {
    const posts = { title: 'something', id: 1 };
      
    const tree = renderer.create(
      <Router>
        <Post
          post={posts}
        />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
