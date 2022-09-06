// import { Container } from 'components/ui/Container.styled';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect, lazy } from 'react';
import { authOperations, authSelectors } from 'store/auth';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { GlobalStyle } from 'components/ui/GlobalStyle';
import PrivatRoute from 'components/Routes/PrivatRoute';
import PublicRoute from 'components/Routes/PublicRoute';

const HomeView = lazy(() => import('views/HomeView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const SharedLayout = lazy(() => import('layout/SharedLayout'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    // <Container>
    <>
      {isRefreshingUser ? (
        <h1>REFRESHING USER...</h1>
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<PublicRoute component={<HomeView />} />} />
              <Route
                path="/register"
                element={
                  <PublicRoute
                    redirectTo="/contacts"
                    restricted
                    component={<RegisterView />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute
                    redirectTo="/contacts"
                    restricted
                    component={<LoginView />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivatRoute
                    redirectTo="/login"
                    component={<ContactsView />}
                  />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
    /* <ToastContainer autoClose={3000} theme="dark" />
      <GlobalStyle /> */
    // </Container>
  );
};
