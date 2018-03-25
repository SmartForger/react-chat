import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
};

const mapStateToProps = ({ user: { token } }) => ({
  token
})

export default connect(
  mapStateToProps,
  null
)(ProtectedRoute);