import { contactsErrorNotification } from 'helpers/errorNotification';
import { useContacts } from 'hooks/useContacts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Field, Form, Submit } from './PhonebookForm.styled';

export const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const onInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return new Error("Such field wasn't found ");
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    if (dublicateFinder(name)) {
      contactsErrorNotification(name);
    } else {
      const credentials = { name, number };
      dispatch(addContact(credentials));
      formReset();
    }
  };

  const dublicateFinder = name => {
    const normalizedName = name.toLowerCase().trim();
    return contacts.some(({ name }) => name.toLowerCase() === normalizedName);
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Field>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onInputChange}
          required
        />
      </Field>

      <Field>
        Number
        <input
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onInputChange}
          required
        />
      </Field>

      <Submit type="submit">Add Contact</Submit>
    </Form>
  );
};
