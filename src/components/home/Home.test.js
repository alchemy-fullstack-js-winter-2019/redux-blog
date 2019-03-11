import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home', () => {
  it('matches a snapshot', () => {
    const posts = [{
      title: 'title',
      body: 'body'
    }];
    const onChange = jest.fn();

    const tree = renderer.create(
      <Router>
        <Home posts={posts} onChange={onChange} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
