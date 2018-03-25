import React from 'react';
import { connect } from 'react-redux';

import { loginUserAttempt } from '../../core/actions';
import LoginReduxForm from './form';

const LoginPage = ({ login }) => (
  <div className="login-register-page">
    <div className="form">
      <LoginReduxForm onSubmit={login}/>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(loginUserAttempt(data))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);