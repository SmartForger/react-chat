import React from 'react';

const MyFormField = ({
  input,
  label,
  type,
  meta: { touched, error}
}) => (
  <div className="form-field">
    <input {...input} placeholder={label} type={type} />
    {touched && error &&
      <span className="error">{error}</span>}
  </div>
)

export default MyFormField;