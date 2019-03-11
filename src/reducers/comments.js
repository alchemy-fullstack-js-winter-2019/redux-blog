import { FETCH_COMMENTS, FETCH_COMMENTS_LOADING } from '../action/comments';
import { RESET } from '../action/common/reset';

const initialState = {
  comments: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload, loading: false };
    case FETCH_COMMENTS_LOADING:
      return { ...state, loading: true };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
