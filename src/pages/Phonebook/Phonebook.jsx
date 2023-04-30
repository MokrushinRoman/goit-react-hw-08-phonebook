import { ContactList, PhonebookForm } from 'components';
import { Wrapper } from './Phonebook.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <PhonebookForm />
      <ContactList />
    </Wrapper>
  );
};

export default Phonebook;
