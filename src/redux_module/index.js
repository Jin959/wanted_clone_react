import { combineReducers } from 'redux'
import bookmarkReducer from './bookmark';
import modalFlagReducer from './modalFlag';

const rootReducer = combineReducers({
  bookmarkReducer,
  modalFlagReducer
});

export default rootReducer;