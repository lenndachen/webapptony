import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import logo1 from '../../Assets/logo1.PNG'

const Navigation1 = () => (
  <nav className="navbar">
    <div className="logo-wrapper"><img src={logo1} alt=""></img></div>
   
    <ul className="links-component">
      <li>
        <Link className="link-buttons" to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link className="link-buttons" to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link className="link forget-password" to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation1;