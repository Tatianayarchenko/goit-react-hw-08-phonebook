import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as contactsApi from 'api/contactsApi';

const get = createAsyncThunk('contacts/get', async () => {
  try {
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});
const add = createAsyncThunk('contacts/add', async newContact => {
  try {
    await contactsApi.addContact(newContact);
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const remove = createAsyncThunk('contacts/remove', async contactId => {
  try {
    await contactsApi.removeContact(contactId);
    toast.success('Contact deleted successfully.');
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const operations = {
  get,
  add,
  remove,
};
export default operations;
