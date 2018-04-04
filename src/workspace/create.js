import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { MyFormField } from '../common/components';

const WorkspaceCreateForm = ({ handleSubmit }) =>
  <div className="create-workspace-form">
    <h1>Create Workspace</h1>
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={MyFormField}
        type="email"
        label="Email"
      />
      <Field
        name="name"
        component={MyFormField}
        type="text"
        label="Name"
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
      <button type="submit">Create Workspace</button>
    </form>
  </div>

const WorkspaceCreateReduxForm = reduxForm({
  form: 'createworkspace',
})(WorkspaceCreateForm);

export default WorkspaceCreateReduxForm;
