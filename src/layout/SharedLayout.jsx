import { Header } from 'layout/Header/Header';
// import { Container } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from 'components/ui/GlobalStyle';
import { Container } from 'components/ui/Container.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <ToastContainer autoClose={3000} theme="dark" />
      <GlobalStyle />
    </Container>
  );
};

export default SharedLayout;
