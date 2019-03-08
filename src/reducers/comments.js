import { FETCH_COMMENTS } from '../action/comments';
import { RESET } from '../action/common/reset';

const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
