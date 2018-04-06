import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { MyFormField } from '../common/components';

const WorkspaceCreateForm = ({ handleSubmit }) =>
  <div className="create-workspace-form">
    <h1>Create Workspace</h1>
    <form onSubmit={handleSubmit}>
      <Field
        name="fullName"
        component={MyFormField}
        type="text"
        label="Full Name"
      />
      <Field
        name="displayName"
        component={MyFormField}
        type="text"
        label="Display Name"
      />
      <Field
        name="email"
        component={MyFormField}
        type="email"
        label="Admin's Email"
      />
      <Field
        name="password"
        component={MyFormField}
        type="password"
        label="Password"
      />
      <Field
        name="confirm"
        component={MyFormField}
        type="password"
        label="Confirm Password"
      />
      <button type="submit" className="button">Create Workspace</button>
    </form>
  </div>

// const validate = () => {

// }

const WorkspaceCreateReduxForm = reduxForm({
  form: 'createworkspace',
})(WorkspaceCreateForm);

export default WorkspaceCreateReduxForm;
