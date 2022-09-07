import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Container } from 'components/ui/Container.styled';
import { Helmet } from 'react-helmet';

const ContactsView = () => {
  return (
    <Container>
      <Helmet>
        <title>Contacts page</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};

export default ContactsView;
