import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  restricted = false,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
