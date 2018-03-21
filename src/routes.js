import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home';
import Login from './login';
import Register from './register';

const appRoutes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  </BrowserRouter>
)

export default appRoutes;
