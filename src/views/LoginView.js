import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';

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
      <h1>Login page</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">
            Email
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="p" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginView;
