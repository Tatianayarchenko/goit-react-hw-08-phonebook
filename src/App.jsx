import { Container } from 'components/ui/Container.styled';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'layout/SharedLayout';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LoginView';
import { ContactsView } from 'views/ContactsView';
import { HomeView } from 'views/HomeView';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Route>
      </Routes>
    </Container>
  );
};

//====================================================

// import { ContactForm } from 'components/ContactForm';
// import { Contacts } from 'components/Contacts';
// import { Filter } from 'components/Filter';
// import { Container } from 'components/ui/Container.styled';

// export const App = () => {
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <Contacts />
//     </Container>
//   );
// };
