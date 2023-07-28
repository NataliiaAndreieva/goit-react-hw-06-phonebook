import PropTypes from 'prop-types';
import { Button, Contacts } from './ContactsListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteIdContact } from 'redux/contactsSlice';

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteIdContact(id));
  };

  return (
    <Contacts key={id}>
      <p>
        {name[0].toLowerCase() + name.substring(1)} <span>{number}</span>
      </p>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </Contacts>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactsListItem;
