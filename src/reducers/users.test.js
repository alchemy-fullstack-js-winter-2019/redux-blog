import reducer from './users';
import { FETCH_USER, FETCH_USERS } from '../actions/users';

describe('Users reducers', () => {
  it('handles a fetch user action', () => {
    const state = {
      userDetail: {
        id: null,
        name: '',
        username: '',
        email: ''
      }
    };
    const fetchedState = reducer(state, {
      type: FETCH_USER,
      payload: {
        id: 2,
        name: 'mc2',
        username: 'usermc2',
        email: 'mc2email@com'
      }
    });
    expect(fetchedState).toEqual({
      userDetail: {
        id: 2,
        name: 'mc2',
        username: 'usermc2',
        email: 'mc2email@com'
      },
      loading: false
    });
  });

  it('handles a fetch users action', () => {
    const state = {
      users: []
    };
    const fetchedState = reducer(state, {
      type: FETCH_USERS,
      payload: [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
      }]
    });
    expect(fetchedState).toEqual({
      users:
        [{ id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz' },
        { id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv'
        }],
      loading: false
    });
  });
});
