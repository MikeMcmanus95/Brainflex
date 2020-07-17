import React, { useEffect } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from './store/user';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';

const Routes = ({ isLoggedIn, loadInitialData }) => {
  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      {isLoggedIn ?? (
        <>
          <Route path="/home" component={Home} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialData: () => dispatch(me()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
