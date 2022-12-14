import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;

export const filterListContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContacts;
  }
);
