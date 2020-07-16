import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
    </>
  );
};

export default Routes;
