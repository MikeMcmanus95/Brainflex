import React from 'react';
import useInput from '../hooks/useInput';

const Login = () => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: pass, bind: bindPass, reset: resetPass } = useInput('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(email, pass);
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

export default Login;
