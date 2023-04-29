import { useContacts } from 'hooks/useContacts';
import { Item, List } from './ContactList.styled';

export const ContactList = () => {
  const { filteredContacts } = useContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name} : {number}
          </p>

          <button type="button">Delete</button>
        </Item>
      ))}
    </List>
  );
};
