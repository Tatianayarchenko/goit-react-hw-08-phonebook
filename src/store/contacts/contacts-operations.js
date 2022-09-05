import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export async function fetchContacts() {
//   const { data } = await axios.get(`/contacts`);
//   return data;
// }
// export async function addContact(contact) {
//   const { data } = await axios.post(`/contacts`, contact);
//   return data;
// }

// export async function removeContact(contactId) {
//   await axios.delete(`/contacts/${contactId}`);
//   return contactId;
// }

// export async function updateContact(contact) {
//   const { data } = await axios.patch(`/contacts/${contact.id}`, contact);
//   return data;
// }

const get = createAsyncThunk('contacts/get', async () => {
  try {
    const contacts = await axios.get('/contacts');
    console.log('get contacts ', contacts);
    return contacts.data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const add = createAsyncThunk('contacts/add', async newContact => {
  try {
    const contacts = await axios.post('/contacts', newContact);
    console.log('add contacts ', contacts);
    return contacts.data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const remove = createAsyncThunk('contacts/remove', async contactId => {
  try {
    const contacts = await axios.delete(`/contacts/${contactId}`);
    console.log('remove contacts ', contacts);
    return contacts.data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const update = createAsyncThunk('contacts/update', async contact => {
  try {
    const contacts = await axios.patch(`/contacts/${contact.id}`, contact);
    console.log('update contacts ', contacts);
    return contacts.data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const operations = {
  get,
  add,
  remove,
  update,
};

export default operations;
