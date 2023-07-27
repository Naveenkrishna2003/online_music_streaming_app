import { createStore } from 'redux';
import ratingReducer from './reducer';

const store = createStore(ratingReducer);

export default store;