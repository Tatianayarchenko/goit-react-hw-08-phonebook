import { Header } from 'layout/common/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/ui/Container.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <ToastContainer autoClose={3000} theme="dark" />
    </>
  );
};

export default SharedLayout;
