import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import image from '../images/contacto_telefono_icon_209801.png';

const HomeImage = styled.img`
  margin-top: 150px;
`;

const HomeView = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <HomeImage src={image} alt="contacts" />
      <h1>Phonebook</h1>
      <p>The aplication for your contacts</p>
    </div>
  );
};

export default HomeView;
