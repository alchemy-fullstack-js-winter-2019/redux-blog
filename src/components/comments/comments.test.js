import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './Comments';
import { MemoryRouter } from 'react-router-dom';


describe('Comments', () => {
  it('matches a snapshot', () => {
    const comments = [
      {
        body: 'pariatur occaecati ea autem at quis et dolorem similique pariatur ipsa hic et saepe itaque cumque repellendus vel et quibusdam qui aut nemo et illo qui non quod officiis aspernatur qui optio'
      },
      {
        body: 'et dolorem sit reprehenderit sapiente occaecati iusto sit impedit nobis ut quia maiores debitis pariatur nostrum et aut assumenda error qui deserunt laborum quaerat et'  
      }
    ];
    const tree = renderer.create(
      <MemoryRouter>
        <Comments comments={comments}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
