import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { AuthFormField } from '../../common/components';

const RegisterForm = ({ handleSubmit }) => (
  <form className="register-form" onSubmit={handleSubmit}>
    <Field
      name="email"
      component={AuthFormField}
      type="email"
      label="Email"
    />
    <Field
      name="name"
      component={AuthFormField}
      type="text"
      label="Name"
    />
    <Field
      name="password"
      component={AuthFormField}
      type="password"
      label="Password"
    />
    <Field
      name="confirm"
      component={AuthFormField}
      type="password"
      label="Confirm Password"
    />
    <button type="submit">create</button>
    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
  </form>
)

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be more than 8 characters';
  }
  if (values.confirm !== values.password) {
    errors.confirm = 'Password does not match';
  }
  return errors
}

const RegisterReduxForm = reduxForm({
  form: 'register',
  validate
})(RegisterForm);

export default RegisterReduxForm;