import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUserAttempt } from '../core/actions';
import RegisterReduxForm from './form';

class Register extends Component {
  render() {
    const { registerUser } = this.props; 

    return (
      <div className="login-register-page">
        <div className="form">
          <RegisterReduxForm onSubmit={registerUser} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: (data) => {
    dispatch(registerUserAttempt({
      email: data.email,
      name: data.name,
      password: data.password
    }));
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Register);