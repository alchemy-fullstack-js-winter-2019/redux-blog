import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './Comments';

describe('Comments', () => {
  it('matches a snapshot', () => {
    const comments = [
      {
        postId: 1,
        id: 1,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
      },
      {
        postId: 1,
        id: 2,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
      },
      {
        postId: 1,
        id: 3,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
      }];
    const tree = renderer.create(
      <Comments comments={comments}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
