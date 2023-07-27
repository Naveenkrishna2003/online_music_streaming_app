import { SET_RATING } from './actions';

const initialState = {
  rating: 0,
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

export default ratingReducer;
