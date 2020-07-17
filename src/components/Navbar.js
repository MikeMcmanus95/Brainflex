import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ isLoggedIn }) => {
  return (
    <div>
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>+</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.user.id,
});

export default connect(mapStateToProps, null)(Navbar);
