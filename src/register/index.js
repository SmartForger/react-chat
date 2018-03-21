import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => (
  <div className="login-register-page">
    <div className="form">
      <form className="register-form">
        <input type="text" placeholder="name"/>
        <input type="password" placeholder="password"/>
        <input type="text" placeholder="email address"/>
        <button>create</button>
        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
  </div>
)

export default Register;