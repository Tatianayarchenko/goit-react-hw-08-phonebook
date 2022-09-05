import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Container } from 'components/ui/Container.styled';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { contactsOperations } from 'store/contacts';

export const ContactsView = () => {
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(contactsOperations.get()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};
