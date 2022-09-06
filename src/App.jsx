import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/ui/Container.styled';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { authOperations } from 'store/auth';
import { GlobalStyle } from 'components/ui/GlobalStyle';
import { lazy } from 'react';

const Home = lazy(() => import('views/HomeView'));
const Login = lazy(() => import('views/LoginView'));
const Contacts = lazy(() => import('views/ContactsView'));
const Register = lazy(() => import('views/RegisterView'));
const SharedLayout = lazy(() => import('layout/SharedLayout'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} theme="dark" />
      <GlobalStyle />
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
