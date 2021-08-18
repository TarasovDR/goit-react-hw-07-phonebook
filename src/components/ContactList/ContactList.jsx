import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions/contacts-actions';
import { MdRemoveCircle } from 'react-icons/md';
import {
  ContactContainer,
  ContactItem,
  ContactButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
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

const mapStateToProps = state => {
  const { filter, contacts } = state;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),

  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
