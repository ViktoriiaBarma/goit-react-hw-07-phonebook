export const getContacts = ({ contacts }) =>contacts.contacts.items;
export const getIsLoading = ({ contacts }) => contacts.contacts.isLoading;
export const getError = ({ contacts }) => contacts.contacts.error;
export const getFilter = ({ contacts }) => contacts.filter;
export const getState = state => state;