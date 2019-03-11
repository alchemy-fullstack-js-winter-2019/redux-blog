import React from 'react';
import renderer from 'react-test-renderer';
import Posts from './Posts';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Posts', () => {
  it('matches a snapshot', () => {
    const posts = [{
      title: 'title',
      body: 'body'
    }];
    const onChange = jest.fn();
    
    const tree = renderer.create(
      <Router>
        <Posts posts={posts} onChange={onChange}/>
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
