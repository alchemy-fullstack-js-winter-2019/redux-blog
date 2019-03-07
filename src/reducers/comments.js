import { FETCH_COMMENTS } from '../action/comments';

const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}
