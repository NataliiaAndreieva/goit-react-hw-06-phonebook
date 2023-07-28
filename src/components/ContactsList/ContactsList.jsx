import React from "react";
import ContactsListItem from "components/ContactsListItem";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/selectors";

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact => contact.contactName.toLowerCase().includes(filter));

    return (
      <ul>
        {visibleContacts.map(({ contactName, contactNumber, id }) => (
          <ContactsListItem
            key={id}
            id={id}
            name={contactName}
            number={contactNumber}
            
          />
        ))}
      </ul>
    );
};


export default ContactsList;