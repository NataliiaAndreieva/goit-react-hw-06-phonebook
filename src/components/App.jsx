import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Form from "./Form";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import { Container } from "./App.styled";
import { useLocalStorage } from 'hooks/useLocalStorage';

export function App () {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');
 
const addNewContact = data => {
  const isExist = contacts.some(
    ({ number }) => number.toLocaleLowerCase() === data.number.toLocaleLowerCase()
  );

  if (isExist) { 
  return alert(`${data.number} is alredy in contacts`);
}
    const newContact = { id: nanoid(), ...data };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const changeFilter = e => {
    setFilter( e.currentTarget.value );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    };
 
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <Form addNewContact={addNewContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactsList
            contacts={getVisibleContacts()}
            deleteContact={deleteContact}
          />
        </Container>
      </>
    );
  }
