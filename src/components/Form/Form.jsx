import React from "react";
import { Container, Button } from "./Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { addNewContacts } from "redux/contactsSlice";
import { selectContacts } from "redux/selectors";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

function Form() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { name, number } = form.elements;
    const contactName = name.value;
    const contactNumber = number.value;

    if (!contacts.length || !contacts.some(
      contact => contact.contactNumber === contactNumber
    ))
    {
      const newContact = {
        id: nanoid(),
        contactName,
        contactNumber,
      };
      dispatch(addNewContacts(newContact));
      form.reset();
      Notify.success(`${contactNumber} contact added`);
    } else {
      Notify.warning(`${contactNumber} is already in contacts`);
    }
  };

    return (
      <Container onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={contacts.name}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={contacts.number}
            placeholder="000-00-00"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button
          type="submit">
          Add contact
        </Button>
      </Container>
    );
  }

export default Form;