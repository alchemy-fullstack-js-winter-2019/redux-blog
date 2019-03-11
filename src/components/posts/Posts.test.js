import React from 'react';
import renderer from 'react-test-renderer';
import Posts from './Posts';
import { MemoryRouter } from 'react-router-dom';


describe('Posts', () => {
  it('matches a snapshot', () => {
    const posts = [
      {
        id:'1',
        title: 'asperiores ea ipsam voluptatibus modi minima quia sinta'
      },
      {
        id:'21',
        title: 'ullam ut quidem id aut vel consequunt' 
      }
    ];
    const tree = renderer.create(
      <MemoryRouter>
        <Posts posts={posts}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
