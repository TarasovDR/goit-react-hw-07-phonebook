import { combineReducers } from 'redux';
import { contactReducer, filterReducer } from './contacts-reducer';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
