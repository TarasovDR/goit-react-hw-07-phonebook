import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { deleteContact } from '../../redux/actions/contacts-actions';
import { MdRemoveCircle } from 'react-icons/md';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import selectors from 'redux/selectors/contacts-selectors';
import * as operations from 'redux/operations/contacts-operations';
import {
  ContactContainer,
  ContactItem,
  ContactButton,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <ContactContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number}>
          <span>{name}:</span>
          <span>{number}</span>
          <ContactButton onClick={() => onDeleteContact(id)}>
            <MdRemoveCircle />
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),

  // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
