import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const get = createAsyncThunk('contacts/get', async () => {
  try {
    const contacts = await axios.get('/contacts');
    console.log('get contacts ', contacts);
    return contacts.data;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const add = createAsyncThunk('contacts/add', async newContact => {
  try {
    const contacts = await axios.post('/contacts', newContact);
    console.log('add contacts ', contacts);
    return contacts.data;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const remove = createAsyncThunk('contacts/remove', async contactId => {
  try {
    await axios.delete(`/contacts/${contactId}`, contactId);
    console.log('remove contacts ', contactId);
    return contactId;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

// const update = createAsyncThunk('contacts/update', async contact => {
//   try {
//     const contacts = await axios.patch(`/contacts/${contact.id}`, contact);
//     console.log('update contacts ', contacts);
//     return contacts.data;
//   } catch (error) {
//     toast.error('Something went wrong, please try again.');
//   }
// });

const operations = {
  get,
  add,
  remove,
  // update,
};

export default operations;
