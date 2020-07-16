import React from 'react';
import useInput from '../hooks/useInput';
import { connect } from 'react-redux';
import { auth } from '../store/user';

const Login = ({ login, errorMsg }) => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: pass, bind: bindPass, reset: resetPass } = useInput('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login('login', email, pass);
    resetEmail();
    resetPass();
  };

  return (
    <div>
      <div>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" {...bindEmail} required />
          <input
            type="password"
            placeholder="Password"
            {...bindPass}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMsg: state.user.errorMsg,
});

const mapDispatchToProps = (dispatch) => ({
  login: (method, email, password) => dispatch(auth(method, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
