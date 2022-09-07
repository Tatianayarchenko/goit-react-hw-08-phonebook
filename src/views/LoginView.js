import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { Helmet } from 'react-helmet';
import { InputForm, FormContainer } from 'components/ui/Form.styled';
import { Button } from 'components/ui/Button.styled';

const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values));
    resetForm();
  };

  const schema = yup.object().shape({
    email: yup.string().required('Please, enter your email.'),
    password: yup.string().required('Please, enter your password.'),
  });

  return (
    <div>
      <Helmet>
        <title>Login page</title>
      </Helmet>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <label htmlFor="email">
            Email
            <InputForm type="text" name="email" />
            <ErrorMessage name="email" component="p" />
          </label>
          <label>
            Password
            <InputForm type="password" name="password" />
            <ErrorMessage name="password" component="p" />
          </label>
          <Button type="submit">Login</Button>
        </FormContainer>
      </Formik>
    </div>
  );
};

export default LoginView;
