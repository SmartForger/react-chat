import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error}
}) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched && error &&
       <span className="error">{error}</span>}
  </div>
)

const LoginForm = ({ handleSubmit }) => (
  <form className="register-form" onSubmit={handleSubmit}>
    <Field
      name="email"
      component={renderField}
      type="email"
      label="Email"
    />
    <Field
      name="password"
      component={renderField}
      type="password"
      label="Password"
    />
    <button type="submit">login</button>
    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
  </form>
)

const validate = values => {
  const errors = {}
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
  return errors
}

const LoginReduxForm = reduxForm({
  form: 'login',
  validate
})(LoginForm);

export default LoginReduxForm;