import { createSelector } from '@reduxjs/toolkit';

export const selectFilterValue = state => state.filter;
export const selectContactsList = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);
