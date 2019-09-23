import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import logo1 from '../../Assets/logos/logo1.PNG'
import SignOutButton from "../SignOut"
import { AuthUserContext } from "../Session";


const Navigation = ( authUser) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

  const NavigationAuth = () => (
  <div className="navbar">

    <div className="logo-wrapper">
      <Link to={ROUTES.LANDING}><img src={logo1} alt="logo"/></Link>
    </div>

    <ul className="links-component">
      <li>
        <Link className="link-buttons" to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link className="link-buttons" to={ROUTES.MENU}>Menu</Link>
      </li>
      <li>
        <Link className="link-buttons" to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link className="link-buttons" to={ROUTES.DIAGNOSIS_PAGE}>Diagnosis Page</Link>
      </li>
        <li>
            <Link to={ROUTES.ADMIN} className="link-buttons hidden-admin">Admin</Link>
        </li>
        <li>
        <Link to={ROUTES.SIGN_OUT} className="link-buttons"><SignOutButton/> </Link>
        </li>
      </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navnonauth-wrapper">
    <div className="logo-wrapper">
      <Link to={ROUTES.LANDING}><img src={logo1} alt=""></img></Link>
    </div>
    <div>
      <ul>
        <li className="links-containernonauth"> <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
        <li className="links-containernonauth"> <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;