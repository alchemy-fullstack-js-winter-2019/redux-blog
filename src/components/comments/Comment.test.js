import React from 'react';
import renderer from 'react-test-renderer';
import Comment from './Comment';

describe('Comment', () => {
  it('matches a snapshot', () => {
    const comment = {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
    };

    const tree = renderer.create(
      <Comment {...comment}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
