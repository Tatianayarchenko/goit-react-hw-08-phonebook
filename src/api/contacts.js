import { api } from './api';

export async function fetchContacts() {
  const { data } = await api.get(`/contacts`);
  return data;
}
export async function addContact(contact) {
  const { data } = await api.post(`/contacts`, contact);
  return data;
}

export async function removeContact(contactId) {
  return await api.delete(`/contacts/${contactId}`);
}
