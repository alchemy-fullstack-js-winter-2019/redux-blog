import React from 'react';
import renderer from 'react-test-renderer';
import CommentList from './CommentList';

describe('CommentList component tests', () => {
  it('renders the CommentList component correctly', () => {
    const comments = [{ body: 'something', id: 1 }, { body: 'something', id: 2 }];
    const tree = renderer.create(
      <CommentList
        comments={comments}
      />
    );
    expect(tree).toMatchSnapshot;
  });
});
