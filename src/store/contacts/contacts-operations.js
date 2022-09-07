import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const get = createAsyncThunk('contacts/get', async () => {
  try {
    const contacts = await axios.get('/contacts');
    return contacts.data;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const add = createAsyncThunk('contacts/add', async newContact => {
  try {
    const contacts = await axios.post('/contacts', newContact);
    return contacts.data;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const remove = createAsyncThunk('contacts/remove', async contactId => {
  try {
    await axios.delete(`/contacts/${contactId}`, contactId);
    return contactId;
  } catch (error) {
    toast.error('This contact has been deleted, please reload the page.');
  }
});

const operations = {
  get,
  add,
  remove,
};

export default operations;
