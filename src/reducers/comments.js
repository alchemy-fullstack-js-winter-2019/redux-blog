import {
  FETCH_COMMENTS,
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_END
} from '../actions/comments';

const initialState = {
  comments: [],
  isLoading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: payload
      };
    case LOAD_COMMENTS_START:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_COMMENTS_END:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

