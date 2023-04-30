import { useContacts } from 'hooks/useContacts';
import { Item, List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const { filteredContacts } = useContacts();
  const dispatch = useDispatch();

  const handeDeleteContact = id => dispatch(deleteContact(id));

  return filteredContacts.length > 0 ? (
    <List>
      {filteredContacts.map(({ id, name, number }, index) => (
        <Item key={id}>
          <p>
            {index + 1}) {name} : {number}
          </p>

          <button type="button" onClick={() => handeDeleteContact(id)}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  ) : (
    <h2 style={{ marginTop: '50px' }}>No contacts in your phonebook.</h2>
  );
};
