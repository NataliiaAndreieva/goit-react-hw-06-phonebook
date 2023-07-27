import React, { useState } from "react";
import { Container, Button } from "./Form.styled";

 function Form({addNewContact}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
   
  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
  setName(value);
  break;

      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });
    setName('');
    setNumber('');
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
            value={name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Number
          <input
            onChange={handleInputChange}
            type="tel"
            name="number"
            value={number}
            placeholder="000-00-00"
            pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button
          type="submit"
          // disabled={!this.state.name || !this.state.number}
        >
          Add contact
        </Button>
      </Container>
    );
  }

export default Form;