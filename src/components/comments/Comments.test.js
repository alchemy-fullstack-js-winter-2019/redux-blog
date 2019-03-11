import React from 'react';
import renderer from 'react-test-renderer';
import Comments  from './Comments';

describe('Comments', () => {
  it('matches a snapshot', () => {
    const comments = [{
      body: 'comment',
      email: 'email@email.com'
    }];
    
    const tree = renderer.create(
      <Comments comments={comments}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
