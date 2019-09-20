import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import logo1 from '../../Assets/logos/logo1.PNG'
import menu from "../../Components/Menu";




const Navigation = () => (
  <div>
  <AuthUserConectext.Comsumer>
    {authUser => 
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )}
  </AuthUserConectext.Comsumer>
  </div>
)

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
        <Link className="link-buttons" to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link className="link-buttons" to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link className="link-buttons" to={ROUTES.DIAGNOSIS_PAGE}>Diagnosis Page</Link>
      </li>
        {!!authUser.roles[ROLES.ADMIN]&& (
          <li>
            <Link to={ROUTES.ADMIN} className="a">Admin</Link>
          </li>
        )}
        <li>
        <SignOutButton /> 
        </li>
      </ul>
  </div>
);

const NavigationNonAuth = () => (
  <nav className="navbar">
    <div className="logo-wrapper">
      <Link to={ROUTES.LANDING}><img src={logo1} alt=""></img></Link>\
    </div>
    <div>
      <ul>
        <li className="links-containernonauth"> <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
        <li className="links-containernonauth"> <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation;