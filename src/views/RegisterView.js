import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { authOperations } from 'store/auth/auth-operations';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { authOperations } from 'store/auth';

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
        <Form>
          <label htmlFor="name">
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="p" />
          </label>

          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" />
          </label>

          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" />
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterView;
