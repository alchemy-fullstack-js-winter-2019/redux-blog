import React from 'react';
import renderer from 'react-test-renderer';
import Comment from './Comment';

describe('Comment component tests', () => {
  it('renders the Comment component correctly', () => {
    const tree = renderer.create(
      <Comment
        comment='sdfsdf'
      />
    );
    expect(tree).toMatchSnapshot;
  });
});
