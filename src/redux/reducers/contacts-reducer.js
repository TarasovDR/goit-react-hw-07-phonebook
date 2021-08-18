import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  changeFilter,
} from '../actions/contacts-actions';

export const contactReducer = createReducer([], {
  [addContact]: (state, { payload }) =>
    state.some(
      ({ name, number }) => name === payload.name && number === payload.number,
    )
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],

  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
