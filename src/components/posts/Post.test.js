import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Post', () => {
  it('matches a snapshot', () => {
    const post = {
      title: 'title',
      body: 'body'
    };
    
    const tree = renderer.create(
      <Router>
        <Post post={post}/>
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
