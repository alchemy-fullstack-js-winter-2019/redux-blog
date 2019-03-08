import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home component tests', () => {
  it('renders the Home component correctly', () => {
    const posts = [{ body: 'something', id: 1 }, { body: 'something', id: 2 }];
    const tree = renderer.create(
      <Router>
        <Home posts={posts} />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
