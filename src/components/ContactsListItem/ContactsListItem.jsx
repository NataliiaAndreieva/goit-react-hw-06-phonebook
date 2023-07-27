import PropTypes from 'prop-types';
import { Button } from './ContactsListItem.styled';

const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id}>
      {name}: {number}
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
