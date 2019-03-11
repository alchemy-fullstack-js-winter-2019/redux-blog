import { getComments } from './comments';

describe('comments selector test', () => {
  it('can get comments', () => {
    const state = {
      comments: {
        comments: ['orange', 'banana', '420'] 
      }
    };
    const selectedComments = getComments(state);
    expect(selectedComments).toEqual(['orange', 'banana', '420']);
  });
});
