import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// export const addContact = createAction('contacts/Add', (name, number) => ({
//   payload: {
//     id: `id-${uuidv4()}`,
//     name,
//     number,
//   },
// }));

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('filter/Change');
