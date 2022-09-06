import { ContactsList, ContactsItem, ContactsText } from './Contacts.styled';
import { Button } from '../ui/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'store/contacts/contacts-selectors';
import { contactsOperations } from 'store/contacts';
import { useEffect } from 'react';

// import { removeContacts, getContsctsValue, getFilterValue } from 'store/slice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilterValue);

  useEffect(() => {
    dispatch(contactsOperations.get());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(contactsOperations.remove(id));
  };

  const getVisibleContacts = () => {
    if (contacts) {
      const filterContacts = contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filterContacts;
    }
  };

  // const getVisibleContacts = () => {
  //     return contacts.filter(item =>
  //    item.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  // };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactsList>
      {/* {visibleContacts.lenght !== 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <ContactsText>{name}</ContactsText>
            <ContactsText>{number}</ContactsText>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
          </ContactsItem>
        ))} */}
      {contacts &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <ContactsText>{name}</ContactsText>
            <ContactsText>{number}</ContactsText>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
          </ContactsItem>
        ))}
      {/* {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactsText>{name}</ContactsText>
          <ContactsText>{number}</ContactsText>
          <Button onClick={() => deleteContact(id)}>Delete</Button>
        </ContactsItem>
      ))} */}
    </ContactsList>
  );
};
