import { useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsList,
  selectContactsLoading,
  selectFilterValue,
  selectFilteredContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectFilterValue);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectContactsError);
  const isLoading = useSelector(selectContactsLoading);

  return { filteredContacts, error, isLoading, contacts, filter };
};
