import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const NotFound = ({ token, ...rest }) => {
  const regexp = /^\/(.+)\//;
  const match = regexp.exec(rest.location.pathname);
  
  if (match && match[1] && match[1] === 'workspace') {
    return <Redirect to="/workspace"/>
  }

  console.log(match);

  let workspaceName;
  if (match) {
    workspaceName = match[1];
  } else {
    workspaceName = rest.location.pathname.slice(1);
  }

  console.log(workspaceName);

  if (token) {
    return <h1>Page not found</h1>
  } else {
    return <Redirect to={`/${workspaceName}/login`}/>
  }
}

const mapStateToProps = ({ user }) => ({
  token: user.token
})

export default connect(
  mapStateToProps,
  null
)(NotFound);