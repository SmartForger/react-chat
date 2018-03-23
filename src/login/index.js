import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setToken } from '../core/actions';

class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    this.props.login();
  }

  render() {
    return (
      <div className="login-register-page">
        <div className="form">
          <form className="login-form" onSubmit={this.submit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>login</button>
            <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
          </form>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(setToken('loggedin'))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);