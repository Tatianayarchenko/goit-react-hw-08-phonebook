import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Formik, ErrorMessage } from 'formik';
import { authOperations } from 'store/auth';
import { FormContainer, InputForm } from 'components/ui/Form.styled';
import { Button } from 'components/ui/Button.styled';

const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().required('Please, enter your name.'),
    email: yup.string().required('Please, enter your number.'),
    password: yup.string().required('Please, enter your number.'),
  });

  return (
    <div>
      <Helmet>
        <title>Registration page</title>
      </Helmet>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <label htmlFor="name">
            Name
            <InputForm type="text" name="name" />
            <ErrorMessage name="name" component="p" />
          </label>

          <label>
            Email
            <InputForm type="email" name="email" />
            <ErrorMessage name="email" component="p" />
          </label>

          <label>
            Password
            <InputForm type="password" name="password" />
            <ErrorMessage name="password" component="p" />
          </label>

          <Button type="submit">Register</Button>
        </FormContainer>
      </Formik>
    </div>
  );
};

export default RegisterView;
