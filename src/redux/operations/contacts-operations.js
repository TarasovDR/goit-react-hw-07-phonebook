import * as contactsActions from 'redux/actions/contacts-actions';
import * as api from 'services/api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await api.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  const newContact = {
    name,
    number,
  };
  dispatch(contactsActions.addContactRequest());
  try {
    const addedContact = await api.addContact(newContact);
    dispatch(contactsActions.addContactSuccess(addedContact));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    const deletedContact = await api.deleteContact(id);
    dispatch(contactsActions.deleteContactSuccess(deletedContact));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};
