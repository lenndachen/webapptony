import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import logo from '../../Assets/logo.PNG'

const Navigation1 = () => (
  <nav className="navbar">
  <div>
    <ul className="links-component">
     <img src={logo} alt=""></img>
     <div className="link-items">
      <div className="link1">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </div>
      <div className="link2">
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </div>
      <div className="link3">
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
      </div>
      </div>
    </ul>
  </div>
  </nav>
);

export default Navigation1;