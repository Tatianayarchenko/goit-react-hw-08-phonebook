import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect, lazy } from 'react';
import { authOperations } from 'store/auth';
import PrivateRoute from 'hocs/PrivateRoute';
import PublicRoute from 'hocs/PublicRoute';
import { useAuth } from 'hooks';
import { Loading } from 'components/Loader';

const HomeView = lazy(() => import('views/HomeView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const SharedLayout = lazy(() => import('layout/SharedLayout'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <h1>REFRESHING USER...</h1>
      ) : (
        <Suspense fallback={<Loading />}>
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
                  <PrivateRoute
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
  );
};
