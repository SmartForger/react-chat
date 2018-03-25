import React from 'react';
import { connect } from 'react-redux';
import { setToken } from '../../core/actions';

const AppHeader = ({ logout }) => (
  <div>
    <button onClick={logout}>Log out</button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(setToken(''))
})

export default connect(
  null,
  mapDispatchToProps
)(AppHeader);