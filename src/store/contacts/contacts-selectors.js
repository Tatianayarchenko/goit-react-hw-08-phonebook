export const getContacts = state => state.contacts.items;
export const isContactsLoading = state => state.contacts.isLoading;
export const getFilterValue = state => state.contacts.filter;

const contactsSelectors = {
  getContacts,
  isContactsLoading,
  getFilterValue,
};
export default contactsSelectors;
