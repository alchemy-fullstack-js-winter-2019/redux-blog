import React from 'react';
import renderer from 'react-test-renderer';
import Comment  from './Comment';

describe('Comment', () => {
  it('matches a snapshot', () => {
    const comment = {
      body: 'comment',
      email: 'email@email.com'
    };
    const tree = renderer.create(
      <Comment comment={comment}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
