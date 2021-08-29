import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;
const isLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  },
);

const selectors = {
  getFilter,
  getContacts,
  isLoading,
  getVisibleContacts,
};

export default selectors;
