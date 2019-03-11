import React from 'react';
import renderer from 'react-test-renderer';
import AllPosts from './AllPosts';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AllPosts component tests', () => {
  it('renders the AllPosts component correctly', () => {
    const posts = [{ body: 'something', id: 1 }, { body: 'something', id: 2 }];
    const fetch = jest.fn();
    const onChange = jest.fn();
    const term  = '';
    const location  = {};
    const history = {};
      
    const tree = renderer.create(
      <Router>
        <AllPosts
          posts={posts}
          fetch={fetch}
          onChange={onChange}
          term={term}
          location={location}
          history={history}
        />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
