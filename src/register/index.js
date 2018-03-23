import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => (
  <div className="login-register-page">
    <div className="form">
      <form className="register-form">
        <input type="email" placeholder="Email Address"/>
        <input type="text" placeholder="Name"/>
        <input type="password" placeholder="Password"/>
        <input type="confirm" placeholder="Confirm Password"/>
        <button>create</button>
        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
  </div>
)

export default Register;