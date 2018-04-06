import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';

import { ProtectedRoute, NotFound } from './common/components';
import Home from './home';
import Login from './auth/login';
import Register from './auth/register';
import WorkspaceLayout from './workspace/layout';

const appRoutes = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Redirect exact from="/" to="/workspace"/>
        <Route exact path="/workspace" component={WorkspaceLayout}/>
        <ProtectedRoute path="/:workspace_name/home" component={Home}/>
        <Route path="/:workspace_name/login" component={Login}/>
        <Route path="/:workspace_name/register" component={Register}/>
        {/* <Route path="/:workspace_name/*" component={NotFound}/> */}
      </Switch>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </div>
  </ConnectedRouter>
)

export default appRoutes;
