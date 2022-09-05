import { nanoid } from 'nanoid';
import { Button } from '../ui/Button.styled';
// import { InputForm } from '../ui/Input.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'store/contacts';
import { getContacts } from 'store/contacts/contacts-selectors';
import { FormContainer, InputForm } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    formSubmitHendler(values);
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Please, enter your name.'),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Please, enter your number.'),
  });

  const formSubmitHendler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizedName = contact.name.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === normalizedName)
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperations.add({ id: nanoid(), name, number }));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <label htmlFor="name">
          Name
          <InputForm type="text" name="name" required />
          <ErrorMessage name="name" component="p" />
        </label>
        <label htmlFor="number">
          Number
          <InputForm type="tel" name="number" required />
          <ErrorMessage name="number" component="p" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};
