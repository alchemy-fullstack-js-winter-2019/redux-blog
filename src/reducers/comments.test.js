import reducer from './comments';

describe('reducer tests', () => {
  let state = {};

  beforeEach(() => {
    state = {
      comments: []
    };
  });

  it('updates state with an array of comments', () => {
    const action = {
      type: 'FETCH_COMMENTS',
      payload: [
        { comment: 'aldkfj' },
        { comment: 'alfj' },
        { comment: 'aldkfdaffj' }
      ]
    };

    const results = reducer(state, action);
    
    expect(results).toEqual({
      ...state,
      comments: [
        { comment: 'aldkfj' },
        { comment: 'alfj' },
        { comment: 'aldkfdaffj' }
      ]
    });
  });
});
