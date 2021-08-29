import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as contactsActions from 'redux/actions/contacts-actions';

// import {
//   addContact,
//   deleteContact,
//   changeFilter,
// } from '../actions/contacts-actions';

// export const contactReducer = createReducer([], {
//   [addContact]: (state, { payload }) =>
//     state.some(
//       ({ name, number }) => name === payload.name && number === payload.number,
//     )
//       ? alert(`${payload.name} is already in contacts`)
//       : [...state, payload],

//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// export const filterReducer = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, actions) => actions.payload,
  [contactsActions.addContactSuccess]: (state, actions) => [
    ...state,
    actions.payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, actions) =>
    state.filter(({ id }) => id !== actions.payload),
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
  filter,
});
